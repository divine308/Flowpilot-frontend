import {
  useEffect,
  useState
} from "react";

import {
  ShieldCheck,
  MessageCircle,
  Database,
  Lock,
  Sparkles,
  Building2,
  CreditCard,
  Save,
  CheckCircle2,
  XCircle,
  Bot,
  ExternalLink,
  RefreshCw
} from "lucide-react";

import Badge from "../components/Badge";
import Button from "../components/Button";
import { api } from "../services/api";

const META_APP_ID =
  import.meta.env.VITE_META_APP_ID;

const META_CONFIG_ID =
  import.meta.env.VITE_META_WHATSAPP_CONFIG_ID;

export default function Settings() {
  const [business, setBusiness] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [savingBusiness, setSavingBusiness] =
    useState(false);

  const [savingAI, setSavingAI] =
    useState(false);

  const [savingWhatsApp, setSavingWhatsApp] =
    useState(false);

  const [savingPayment, setSavingPayment] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [whatsappConnecting, setWhatsAppConnecting] =
    useState(false);

  const [whatsappStatus, setWhatsAppStatus] =
    useState("idle");

  const [businessForm, setBusinessForm] =
    useState({
      name: "",
      description: "",
      category: "",
      website: "",
      address: "",
      phone: "",
      email: "",
      currency: "NGN"
    });

  const [aiForm, setAIForm] =
    useState({
      enabled: true,
      personality:
        "Professional, friendly and helpful.",
      instructions: "",
      orderConfirmationRequired: true,
      paymentRequiredBeforeConfirmation: false,
      allowDiscounts: false,
      discountInstructions: "",
      deliveryInstructions: "",
      returnPolicy: ""
    });

  const [paymentForm, setPaymentForm] =
    useState({
      methods: ["bank_transfer"],
      bankName: "",
      bankCode: "",
      accountName: "",
      accountNumber: "",
      paymentProvider: "none",
      paymentProviderAccountId: ""
    });

  useEffect(() => {
    loadBusiness();
  }, []);

  useEffect(() => {
    loadFacebookSDK();

    function handleMessage(event) {
      if (
        event.origin !==
        "https://www.facebook.com"
      ) {
        return;
      }

      let data = event.data;

      if (
        typeof data === "string"
      ) {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }

      if (
        !data ||
        data.type !==
          "WA_EMBEDDED_SIGNUP"
      ) {
        return;
      }

      handleWhatsAppSignupEvent(
        data
      );
    }

    window.addEventListener(
      "message",
      handleMessage
    );

    return () => {
      window.removeEventListener(
        "message",
        handleMessage
      );
    };
  }, []);

  async function loadFacebookSDK() {
    if (
      typeof window === "undefined"
    ) {
      return;
    }

    if (
      window.FB
    ) {
      return;
    }

    if (
      document.getElementById(
        "facebook-jssdk"
      )
    ) {
      return;
    }

    const script =
      document.createElement(
        "script"
      );

    script.id =
      "facebook-jssdk";

    script.src =
      "https://connect.facebook.net/en_US/sdk.js";

    script.async = true;
    script.defer = true;
    script.crossOrigin =
      "anonymous";

    script.onload = () => {
      if (
        !window.FB ||
        !META_APP_ID
      ) {
        return;
      }

      window.FB.init({
        appId: META_APP_ID,
        cookie: true,
        xfbml: true,
        version:
          "v23.0"
      });
    };

    document.body.appendChild(
      script
    );
  }

  async function handleWhatsAppSignupEvent(
    event
  ) {
    if (
      event.event ===
      "CANCEL"
    ) {
      setWhatsAppConnecting(
        false
      );

      setWhatsAppStatus(
        "cancelled"
      );

      setError(
        "WhatsApp setup was cancelled."
      );

      return;
    }

    if (
      event.event !==
      "FINISH"
    ) {
      return;
    }

    const eventData =
      event.data || {};

    const phoneNumberId =
      eventData.phone_number_id ||
      eventData.phoneNumberId ||
      "";

    const businessAccountId =
      eventData.waba_id ||
      eventData.wabaId ||
      "";

    if (
      !phoneNumberId ||
      !businessAccountId
    ) {
      setWhatsAppConnecting(
        false
      );

      setWhatsAppStatus(
        "error"
      );

      setError(
        "Meta completed the signup, but FlowPilot did not receive the WhatsApp account information."
      );

      return;
    }

    try {
      setSavingWhatsApp(
        true
      );

      setWhatsAppStatus(
        "connecting"
      );

      /*
       * The Facebook Login callback below stores
       * the temporary authorization code.
       *
       * Meta sends the phone number ID and WABA ID
       * through the WA_EMBEDDED_SIGNUP event.
       */

      const pendingSignup =
        sessionStorage.getItem(
          "flowpilot_whatsapp_signup"
        );

      let signupCode = "";

      if (
        pendingSignup
      ) {
        try {
          const parsed =
            JSON.parse(
              pendingSignup
            );

          signupCode =
            parsed.code || "";
        } catch {
          signupCode = "";
        }
      }

      if (
        !signupCode
      ) {
        throw new Error(
          "FlowPilot did not receive the Meta authorization code."
        );
      }

      /*
       * Backend receives the temporary Meta code
       * and the identifiers returned by Embedded Signup.
       *
       * The backend must exchange the code for the
       * long-lived/system-user credentials and store
       * them securely. The browser never stores the
       * permanent WhatsApp access token.
       */

      await api.updateWhatsApp({
        embeddedSignupCode:
          signupCode,

        phoneNumberId,

        businessAccountId,

        connected: true
      });

      sessionStorage.removeItem(
        "flowpilot_whatsapp_signup"
      );

      setWhatsAppStatus(
        "connected"
      );

      notifySuccess(
        "WhatsApp Business connected successfully."
      );

      await loadBusiness();
    } catch (err) {
      setWhatsAppStatus(
        "error"
      );

      setError(
        err.message ||
        "Unable to finish WhatsApp connection."
      );
    } finally {
      setSavingWhatsApp(
        false
      );

      setWhatsAppConnecting(
        false
      );
    }
  }

  async function connectWhatsApp() {
    setError("");

    if (
      !META_APP_ID
    ) {
      setError(
        "WhatsApp connection is not configured. VITE_META_APP_ID is missing."
      );

      return;
    }

    if (
      !META_CONFIG_ID
    ) {
      setError(
        "WhatsApp connection is not configured. VITE_META_WHATSAPP_CONFIG_ID is missing."
      );

      return;
    }

    if (
      !window.FB
    ) {
      await loadFacebookSDK();

      setError(
        "Meta is still loading. Please try connecting again."
      );

      return;
    }

    setWhatsAppConnecting(
      true
    );

    setWhatsAppStatus(
      "starting"
    );

    setError("");

    try {
      window.FB.login(
        function(response) {
          if (
            response?.authResponse?.code
          ) {
            sessionStorage.setItem(
              "flowpilot_whatsapp_signup",
              JSON.stringify({
                code:
                  response
                    .authResponse
                    .code,
                createdAt:
                  Date.now()
              })
            );

            setWhatsAppStatus(
              "waiting"
            );

            /*
             * Do not finish the connection here.
             *
             * Meta Embedded Signup will send
             * WA_EMBEDDED_SIGNUP with:
             *
             * phone_number_id
             * waba_id
             *
             * The message listener above completes
             * the connection.
             */

            return;
          }

          if (
            response?.status ===
            "unknown"
          ) {
            setWhatsAppConnecting(
              false
            );

            setWhatsAppStatus(
              "cancelled"
            );

            setError(
              "WhatsApp setup was cancelled."
            );

            return;
          }

          setWhatsAppConnecting(
            false
          );

          setWhatsAppStatus(
            "error"
          );

          setError(
            "Meta did not return an authorization code."
          );
        },
        {
          config_id:
            META_CONFIG_ID,

          response_type:
            "code",

          override_default_response_type:
            true,

          extras: {
            feature:
              "whatsapp_embedded_signup",

            setup: {}
          }
        }
      );
    } catch (err) {
      setWhatsAppConnecting(
        false
      );

      setWhatsAppStatus(
        "error"
      );

      setError(
        err.message ||
        "Unable to start WhatsApp setup."
      );
    }
  }

  async function disconnectWhatsApp() {
    try {
      setSavingWhatsApp(
        true
      );

      setError("");

      await api.disconnectWhatsApp();

      sessionStorage.removeItem(
        "flowpilot_whatsapp_signup"
      );

      setWhatsAppStatus(
        "idle"
      );

      notifySuccess(
        "WhatsApp disconnected."
      );

      await loadBusiness();
    } catch (err) {
      setError(
        err.message ||
        "Unable to disconnect WhatsApp."
      );
    } finally {
      setSavingWhatsApp(
        false
      );
    }
  }

  async function loadBusiness() {
    try {
      setLoading(true);
      setError("");

      const data =
        await api.getBusiness();

      const currentBusiness =
        data.business;

      setBusiness(
        currentBusiness
      );

      setBusinessForm({
        name:
          currentBusiness.name ||
          "",

        description:
          currentBusiness.description ||
          "",

        category:
          currentBusiness.category ||
          "",

        website:
          currentBusiness.website ||
          "",

        address:
          currentBusiness.address ||
          "",

        phone:
          currentBusiness.phone ||
          "",

        email:
          currentBusiness.email ||
          "",

        currency:
          currentBusiness.currency ||
          "NGN"
      });

      setAIForm({
        enabled:
          currentBusiness
            .aiSettings
            ?.enabled ??
          true,

        personality:
          currentBusiness
            .aiSettings
            ?.personality ||
          "Professional, friendly and helpful.",

        instructions:
          currentBusiness
            .aiSettings
            ?.instructions ||
          "",

        orderConfirmationRequired:
          currentBusiness
            .aiSettings
            ?.orderConfirmationRequired ??
          true,

        paymentRequiredBeforeConfirmation:
          currentBusiness
            .aiSettings
            ?.paymentRequiredBeforeConfirmation ??
          false,

        allowDiscounts:
          currentBusiness
            .aiSettings
            ?.allowDiscounts ??
          false,

        discountInstructions:
          currentBusiness
            .aiSettings
            ?.discountInstructions ||
          "",

        deliveryInstructions:
          currentBusiness
            .aiSettings
            ?.deliveryInstructions ||
          "",

        returnPolicy:
          currentBusiness
            .aiSettings
            ?.returnPolicy ||
          ""
      });

      setPaymentForm({
        methods:
          currentBusiness
            .payment
            ?.methods ||
          ["bank_transfer"],

        bankName:
          currentBusiness
            .payment
            ?.bankName ||
          "",

        bankCode:
          currentBusiness
            .payment
            ?.bankCode ||
          "",

        accountName:
          currentBusiness
            .payment
            ?.accountName ||
          "",

        accountNumber:
          currentBusiness
            .payment
            ?.accountNumber ||
          "",

        paymentProvider:
          currentBusiness
            .payment
            ?.paymentProvider ||
          "none",

        paymentProviderAccountId:
          currentBusiness
            .payment
            ?.paymentProviderAccountId ||
          ""
      });
    } catch (err) {
      setError(
        err.message ||
        "Unable to load settings."
      );
    } finally {
      setLoading(false);
    }
  }

  function notifySuccess(
    text
  ) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3500);
  }

  async function saveBusiness() {
    try {
      setSavingBusiness(
        true
      );

      setError("");

      const data =
        await api.updateBusiness(
          businessForm
        );

      setBusiness(
        data.business
      );

      notifySuccess(
        "Business information saved."
      );
    } catch (err) {
      setError(
        err.message ||
        "Unable to save business information."
      );
    } finally {
      setSavingBusiness(
        false
      );
    }
  }

  async function saveAI() {
    try {
      setSavingAI(true);
      setError("");

      await api.updateAISettings(
        aiForm
      );

      notifySuccess(
        "AI settings saved."
      );
    } catch (err) {
      setError(
        err.message ||
        "Unable to save AI settings."
      );
    } finally {
      setSavingAI(false);
    }
  }

  async function savePayment() {
    try {
      setSavingPayment(
        true
      );

      setError("");

      await api.updatePaymentSettings(
        paymentForm
      );

      notifySuccess(
        "Payment settings saved."
      );
    } catch (err) {
      setError(
        err.message ||
        "Unable to save payment settings."
      );
    } finally {
      setSavingPayment(
        false
      );
    }
  }

  function updateBusinessField(
    field,
    value
  ) {
    setBusinessForm(
      prev => ({
        ...prev,
        [field]: value
      })
    );
  }

  function updateAIField(
    field,
    value
  ) {
    setAIForm(
      prev => ({
        ...prev,
        [field]: value
      })
    );
  }

  function updatePaymentField(
    field,
    value
  ) {
    setPaymentForm(
      prev => ({
        ...prev,
        [field]: value
      })
    );
  }

  function togglePaymentMethod(
    method
  ) {
    setPaymentForm(prev => {
      const exists =
        prev.methods.includes(
          method
        );

      return {
        ...prev,

        methods: exists
          ? prev.methods.filter(
              item =>
                item !== method
            )
          : [
              ...prev.methods,
              method
            ]
      };
    });
  }

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">

          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-950" />

          <p className="mt-4 text-sm text-slate-400">
            Loading settings...
          </p>

        </div>
      </div>
    );
  }

  const whatsappConnected =
    business?.whatsapp?.connected;

  return (
    <div className="space-y-8">

      <section>
        <p className="text-sm text-slate-400">
          Workspace
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Settings
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Configure how FlowPilot operates your business.
        </p>
      </section>

      {message && (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-700">
          <CheckCircle2 size={17} />

          {message}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
          <XCircle size={17} />

          {error}
        </div>
      )}

      {/* BUSINESS */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-3">

          <Building2
            size={19}
            className="text-slate-500"
          />

          <div>
            <h2 className="font-bold text-slate-950">
              Business profile
            </h2>

            <p className="text-xs text-slate-400">
              Information used throughout FlowPilot.
            </p>
          </div>

        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Business name
            </label>

            <input
              value={
                businessForm.name
              }
              onChange={e =>
                updateBusinessField(
                  "name",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Category
            </label>

            <input
              value={
                businessForm.category
              }
              onChange={e =>
                updateBusinessField(
                  "category",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-xs font-semibold text-slate-500">
              Description
            </label>

            <textarea
              rows="3"
              value={
                businessForm.description
              }
              onChange={e =>
                updateBusinessField(
                  "description",
                  e.target.value
                )
              }
              placeholder="Tell FlowPilot what your business does..."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Phone
            </label>

            <input
              value={
                businessForm.phone
              }
              onChange={e =>
                updateBusinessField(
                  "phone",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Email
            </label>

            <input
              value={
                businessForm.email
              }
              onChange={e =>
                updateBusinessField(
                  "email",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Website
            </label>

            <input
              value={
                businessForm.website
              }
              onChange={e =>
                updateBusinessField(
                  "website",
                  e.target.value
                )
              }
              placeholder="https://..."
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Address
            </label>

            <input
              value={
                businessForm.address
              }
              onChange={e =>
                updateBusinessField(
                  "address",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

        </div>

        <Button
          className="mt-6"
          loading={savingBusiness}
          onClick={saveBusiness}
        >
          <Save size={15} />
          Save business
        </Button>

      </section>

      {/* AI */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Sparkles
              size={19}
              className="text-slate-500"
            />

            <div>
              <h2 className="font-bold text-slate-950">
                Personalized AI
              </h2>

              <p className="text-xs text-slate-400">
                Control how FlowPilot's AI represents your business.
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={() =>
              updateAIField(
                "enabled",
                !aiForm.enabled
              )
            }
            className={`h-6 w-11 rounded-full p-1 transition ${
              aiForm.enabled
                ? "bg-slate-950"
                : "bg-slate-200"
            }`}
          >
            <span
              className={`block h-4 w-4 rounded-full bg-white transition ${
                aiForm.enabled
                  ? "translate-x-5"
                  : ""
              }`}
            />
          </button>

        </div>

        <div className="mt-6 space-y-5">

          <div>
            <label className="text-xs font-semibold text-slate-500">
              AI personality
            </label>

            <input
              value={
                aiForm.personality
              }
              onChange={e =>
                updateAIField(
                  "personality",
                  e.target.value
                )
              }
              placeholder="Professional, friendly and helpful."
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Custom instructions
            </label>

            <textarea
              rows="4"
              value={
                aiForm.instructions
              }
              onChange={e =>
                updateAIField(
                  "instructions",
                  e.target.value
                )
              }
              placeholder="Tell the AI how you want it to behave..."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div className="grid gap-3 md:grid-cols-2">

            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <div>
                <p className="text-sm font-semibold">
                  Require order confirmation
                </p>

                <p className="text-xs text-slate-400">
                  AI confirms orders only after approval.
                </p>
              </div>

              <input
                type="checkbox"
                checked={
                  aiForm.orderConfirmationRequired
                }
                onChange={e =>
                  updateAIField(
                    "orderConfirmationRequired",
                    e.target.checked
                  )
                }
              />

            </label>

            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <div>
                <p className="text-sm font-semibold">
                  Payment before confirmation
                </p>

                <p className="text-xs text-slate-400">
                  Require payment before confirming orders.
                </p>
              </div>

              <input
                type="checkbox"
                checked={
                  aiForm.paymentRequiredBeforeConfirmation
                }
                onChange={e =>
                  updateAIField(
                    "paymentRequiredBeforeConfirmation",
                    e.target.checked
                  )
                }
              />

            </label>

            <label className="flex items-center justify-between rounded-xl bg-slate-50 p-4 md:col-span-2">

              <div>
                <p className="text-sm font-semibold">
                  Allow discounts
                </p>

                <p className="text-xs text-slate-400">
                  Allow the AI to offer discounts according to your rules.
                </p>
              </div>

              <input
                type="checkbox"
                checked={
                  aiForm.allowDiscounts
                }
                onChange={e =>
                  updateAIField(
                    "allowDiscounts",
                    e.target.checked
                  )
                }
              />

            </label>

          </div>

          {aiForm.allowDiscounts && (
            <div>

              <label className="text-xs font-semibold text-slate-500">
                Discount rules
              </label>

              <textarea
                rows="3"
                value={
                  aiForm.discountInstructions
                }
                onChange={e =>
                  updateAIField(
                    "discountInstructions",
                    e.target.value
                  )
                }
                placeholder="Example: Maximum discount is 10%..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
              />

            </div>
          )}

          <div>

            <label className="text-xs font-semibold text-slate-500">
              Delivery instructions
            </label>

            <textarea
              rows="3"
              value={
                aiForm.deliveryInstructions
              }
              onChange={e =>
                updateAIField(
                  "deliveryInstructions",
                  e.target.value
                )
              }
              placeholder="Tell the AI how delivery works..."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />

          </div>

          <div>

            <label className="text-xs font-semibold text-slate-500">
              Return policy
            </label>

            <textarea
              rows="3"
              value={
                aiForm.returnPolicy
              }
              onChange={e =>
                updateAIField(
                  "returnPolicy",
                  e.target.value
                )
              }
              placeholder="Tell the AI your return and refund policy..."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />

          </div>

        </div>

        <Button
          className="mt-6"
          loading={savingAI}
          onClick={saveAI}
        >
          <Bot size={15} />
          Save AI settings
        </Button>

      </section>

      {/* WHATSAPP */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <MessageCircle
              size={19}
              className="text-slate-500"
            />

            <div>
              <h2 className="font-bold text-slate-950">
                WhatsApp Business
              </h2>

              <p className="text-xs text-slate-400">
                Connect your WhatsApp Business account to FlowPilot.
              </p>
            </div>

          </div>

          {whatsappConnected ? (
            <Badge type="success">
              Connected
            </Badge>
          ) : (
            <Badge>
              Not connected
            </Badge>
          )}

        </div>

        {whatsappConnected ? (
          <div className="mt-6">

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm">
                  <CheckCircle2
                    size={22}
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="font-semibold text-emerald-900">
                    WhatsApp is connected
                  </p>

                  <p className="mt-1 text-sm text-emerald-700">
                    FlowPilot can now receive and process customer conversations from your WhatsApp Business account.
                  </p>

                  {business?.whatsapp
                    ?.displayPhoneNumber && (
                    <p className="mt-3 text-sm font-semibold text-emerald-900">
                      {
                        business
                          .whatsapp
                          .displayPhoneNumber
                      }
                    </p>
                  )}

                </div>

              </div>

            </div>

            <div className="mt-4 flex flex-wrap gap-3">

              <Button
                variant="secondary"
                loading={
                  whatsappConnecting ||
                  savingWhatsApp
                }
                onClick={
                  connectWhatsApp
                }
              >
                <RefreshCw
                  size={15}
                />
                Reconnect WhatsApp
              </Button>

              <Button
                variant="secondary"
                loading={
                  savingWhatsApp
                }
                onClick={
                  disconnectWhatsApp
                }
              >
                <XCircle
                  size={15}
                />
                Disconnect
              </Button>

            </div>

          </div>
        ) : (
          <div className="mt-6">

            <div className="overflow-hidden rounded-2xl bg-slate-950 p-6 text-white">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <MessageCircle
                    size={24}
                  />
                </div>

                <div>

                  <h3 className="font-semibold">
                    Connect WhatsApp Business
                  </h3>

                  <p className="mt-1 max-w-xl text-sm leading-6 text-slate-400">
                    Connect your WhatsApp Business account directly through Meta. You won't need to find or enter technical Meta IDs or access tokens.
                  </p>

                </div>

              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">

                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-sm font-semibold">
                    1. Connect
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Start the secure Meta setup.
                  </p>

                </div>

                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-sm font-semibold">
                    2. Select your business
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Meta guides you through your WhatsApp Business setup.
                  </p>

                </div>

                <div className="rounded-xl bg-white/5 p-4">

                  <p className="text-sm font-semibold">
                    3. FlowPilot connects
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    FlowPilot securely receives the connection.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">

              <Button
                loading={
                  whatsappConnecting ||
                  savingWhatsApp
                }
                onClick={
                  connectWhatsApp
                }
              >
                <MessageCircle
                  size={16}
                />

                {whatsappConnecting
                  ? "Connecting..."
                  : "Connect WhatsApp"}
              </Button>

              <div className="flex items-center gap-2 text-xs text-slate-400">

                <Lock
                  size={13}
                />

                Secure Meta connection

              </div>

            </div>

            {whatsappStatus ===
              "waiting" && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">

                <RefreshCw
                  size={15}
                  className="animate-spin"
                />

                Finishing your WhatsApp setup...

              </div>
            )}

          </div>
        )}

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">

          <ExternalLink
            size={16}
            className="mt-0.5 shrink-0 text-slate-400"
          />

          <div>

            <p className="text-sm font-semibold text-slate-700">
              Your credentials stay protected
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              FlowPilot does not ask customers to copy Meta access tokens or technical WhatsApp identifiers into the dashboard. Meta handles the account authorization flow.
            </p>

          </div>

        </div>

      </section>

      {/* PAYMENTS */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-3">

          <CreditCard
            size={19}
            className="text-slate-500"
          />

          <div>

            <h2 className="font-bold text-slate-950">
              Payment settings
            </h2>

            <p className="text-xs text-slate-400">
              Configure how customers can pay your business.
            </p>

          </div>

        </div>

        <div className="mt-6">

          <p className="text-xs font-semibold text-slate-500">
            Accepted payment methods
          </p>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">

            {[
              [
                "payment_link",
                "Payment link"
              ],
              [
                "bank_transfer",
                "Bank transfer"
              ],
              [
                "cash_on_delivery",
                "Cash on delivery"
              ]
            ].map(
              ([value, label]) => (
                <label
                  key={value}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4"
                >

                  <input
                    type="checkbox"
                    checked={paymentForm.methods.includes(
                      value
                    )}
                    onChange={() =>
                      togglePaymentMethod(
                        value
                      )
                    }
                  />

                  <span className="text-sm font-medium">
                    {label}
                  </span>

                </label>
              )
            )}

          </div>

        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Bank name
            </label>

            <input
              value={
                paymentForm.bankName
              }
              onChange={e =>
                updatePaymentField(
                  "bankName",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Account name
            </label>

            <input
              value={
                paymentForm.accountName
              }
              onChange={e =>
                updatePaymentField(
                  "accountName",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Account number
            </label>

            <input
              value={
                paymentForm.accountNumber
              }
              onChange={e =>
                updatePaymentField(
                  "accountNumber",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">
              Payment provider
            </label>

            <select
              value={
                paymentForm.paymentProvider
              }
              onChange={e =>
                updatePaymentField(
                  "paymentProvider",
                  e.target.value
                )
              }
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
            >

              <option value="none">
                None
              </option>

              <option value="paystack">
                Paystack
              </option>

              <option value="flutterwave">
                Flutterwave
              </option>

            </select>
          </div>

        </div>

        <Button
          className="mt-6"
          loading={
            savingPayment
          }
          onClick={
            savePayment
          }
        >
          <Save size={15} />
          Save payment settings
        </Button>

      </section>

      {/* SECURITY */}

      <section className="grid gap-5 lg:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <ShieldCheck
              size={18}
              className="text-slate-500"
            />

            <h2 className="font-bold text-slate-950">
              Security
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <div className="flex items-center gap-3">

                <Lock
                  size={16}
                  className="text-slate-500"
                />

                <div>

                  <p className="text-sm font-semibold">
                    HTTP-only sessions
                  </p>

                  <p className="text-xs text-slate-400">
                    Authentication cookies cannot be accessed by JavaScript.
                  </p>

                </div>

              </div>

              <Badge type="success">
                Active
              </Badge>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <div>

                <p className="text-sm font-semibold">
                  API rate limiting
                </p>

                <p className="text-xs text-slate-400">
                  Protects the API against excessive requests.
                </p>

              </div>

              <Badge type="success">
                Active
              </Badge>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <Database
              size={18}
              className="text-slate-500"
            />

            <h2 className="font-bold text-slate-950">
              Database
            </h2>

          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 p-4">

            <div>

              <p className="text-sm font-semibold">
                MongoDB
              </p>

              <p className="text-xs text-slate-400">
                Primary application database
              </p>

            </div>

            <Badge type="success">
              Connected
            </Badge>

          </div>

        </div>

      </section>

    </div>
  );
}