
import {
  ArrowRight,
  Bot,
  Boxes,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  CreditCard,
  Globe2,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  Package,
  Play,
  RefreshCw,
  Send,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  Zap
} from "lucide-react";

import {
  useState
} from "react";

import {
  Link
} from "react-router-dom";

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is FlowPilot?",
      answer:
        "FlowPilot is an AI-powered operations platform that helps businesses automate customer conversations, orders, inventory workflows, payments and everyday operational tasks from one workspace."
    },
    {
      question: "Does FlowPilot work with WhatsApp?",
      answer:
        "Yes. You can connect your business WhatsApp account and let FlowPilot handle customer requests, product questions, order conversations and other repetitive interactions."
    },
    {
      question: "Can FlowPilot manage my orders?",
      answer:
        "Yes. Orders created through your connected workflows can be organized inside FlowPilot, including customer information, products, quantities, payment status and order status."
    },
    {
      question: "Does the AI make decisions using my inventory?",
      answer:
        "Yes. FlowPilot is designed to use the business information, products and inventory you provide when processing customer requests."
    },
    {
      question: "Can I still control everything myself?",
      answer:
        "Absolutely. FlowPilot is designed to automate repetitive work while keeping the business owner in control. You can review orders, conversations, inventory and operational activity from your workspace."
    },
    {
      question: "How do I get started?",
      answer:
        "Create your workspace, add your business information, configure your products and payment options, then connect your communication channels. FlowPilot can then begin handling repetitive operational workflows."
    }
  ];

  const features = [
    {
      icon: Bot,
      title: "AI Operations",
      description:
        "Give your business an intelligent layer that understands customer requests and turns them into useful actions."
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Automation",
      description:
        "Let customers ask questions, check products and place orders through conversations instead of manual back-and-forth."
    },
    {
      icon: Package,
      title: "Order Management",
      description:
        "Keep customer orders, items, quantities, totals and statuses organized automatically."
    },
    {
      icon: Boxes,
      title: "Inventory Awareness",
      description:
        "Connect your products and inventory so customer conversations can work with real business information."
    },
    {
      icon: CreditCard,
      title: "Payments",
      description:
        "Configure payment options such as Paystack, bank transfer and cash on delivery."
    },
    {
      icon: LayoutDashboard,
      title: "One Workspace",
      description:
        "Monitor conversations, orders, customers and business activity from one clean operational dashboard."
    }
  ];

  const steps = [
    {
      number: "01",
      icon: Store,
      title: "Create your workspace",
      description:
        "Add your business name, category and basic business information."
    },
    {
      number: "02",
      icon: Boxes,
      title: "Add your products",
      description:
        "Give FlowPilot the inventory and product information it needs to understand your business."
    },
    {
      number: "03",
      icon: CreditCard,
      title: "Configure payments",
      description:
        "Choose how customers can pay and provide the necessary payment details."
    },
    {
      number: "04",
      icon: MessageCircle,
      title: "Connect WhatsApp",
      description:
        "Connect your business communication channel and let FlowPilot handle repetitive requests."
    }
  ];

  const useCases = [
    {
      icon: ShoppingBag,
      title: "Online Stores",
      text: "Automate product questions, customer conversations and order collection."
    },
    {
      icon: Store,
      title: "Fashion Brands",
      text: "Handle size, availability, product and order questions automatically."
    },
    {
      icon: Truck,
      title: "Delivery Businesses",
      text: "Organize customer requests and operational workflows in one place."
    },
    {
      icon: Headphones,
      title: "Service Businesses",
      text: "Reduce repetitive customer support and administrative work."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-950/10">
              <Zap size={19} />
            </div>

            <span className="text-lg font-bold tracking-tight">
              FlowPilot
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a
              href="#features"
              className="transition hover:text-slate-950"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-slate-950"
            >
              How it works
            </a>

            <a
              href="#use-cases"
              className="transition hover:text-slate-950"
            >
              Use cases
            </a>

            <a
              href="#faq"
              className="transition hover:text-slate-950"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-slate-950 sm:block"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="group flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Get started
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-slate-100/80 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
              <Sparkles size={14} />
              AI-powered business operations
              <ChevronRight size={13} />
            </div>

            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-8xl">
              Your business.
              <br />
              <span className="text-slate-400">
                On autopilot.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
              FlowPilot connects AI, WhatsApp, inventory,
              orders and payments into one intelligent
              operational system for your business.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                to="/register"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
              >
                Create your workspace
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="#how-it-works"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
              >
                <Play size={15} />
                See how it works
              </a>

            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check size={13} />
                Easy setup
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={13} />
                AI-powered
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={13} />
                Built for businesses
              </span>
            </div>
          </div>

          {/* HERO PRODUCT MOCKUP */}
          <div className="mx-auto mt-20 max-w-6xl">

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-2 shadow-2xl shadow-slate-300/50">

              <div className="overflow-hidden rounded-2xl bg-slate-50">

                <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-white px-5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                  <div className="ml-4 flex h-7 flex-1 items-center rounded-lg bg-slate-100 px-3 text-[10px] text-slate-400">
                    app.flowpilot.com/dashboard
                  </div>
                </div>

                <div className="grid min-h-[500px] lg:grid-cols-[220px_1fr]">

                  {/* SIDEBAR */}
                  <aside className="hidden border-r border-slate-200 bg-white p-5 lg:block">

                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
                        <Zap size={14} />
                      </div>

                      <span className="text-sm font-bold">
                        FlowPilot
                      </span>
                    </div>

                    <div className="mt-8 space-y-1">

                      {[
                        ["Dashboard", LayoutDashboard],
                        ["Orders", ShoppingBag],
                        ["Customers", Users],
                        ["Inventory", Boxes],
                        ["WhatsApp", MessageCircle],
                        ["Settings", Settings2]
                      ].map(([label, Icon], index) => (
                        <div
                          key={label}
                          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium ${
                            index === 0
                              ? "bg-slate-950 text-white"
                              : "text-slate-500"
                          }`}
                        >
                          <Icon size={14} />
                          {label}
                        </div>
                      ))}

                    </div>
                  </aside>

                  {/* DASHBOARD */}
                  <div className="p-5 sm:p-8">

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400">
                          Friday, August 28
                        </p>

                        <h3 className="mt-1 text-xl font-bold">
                          Good morning 👋
                        </h3>
                      </div>

                      <div className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium sm:block">
                        Today
                      </div>
                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                      {[
                        ["Orders", "128", "+18.4%", ShoppingBag],
                        ["Revenue", "₦842k", "+12.8%", Wallet],
                        ["Customers", "1,284", "+9.2%", Users],
                        ["Automation", "94%", "+6.1%", Bot]
                      ].map(
                        ([title, value, growth, Icon]) => (
                          <div
                            key={title}
                            className="rounded-2xl border border-slate-200 bg-white p-4"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                                <Icon size={15} />
                              </div>

                              <span className="text-[10px] font-semibold text-slate-500">
                                {growth}
                              </span>
                            </div>

                            <p className="mt-5 text-xs text-slate-400">
                              {title}
                            </p>

                            <p className="mt-1 text-xl font-bold">
                              {value}
                            </p>
                          </div>
                        )
                      )}

                    </div>

                    <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">

                      <div className="rounded-2xl border border-slate-200 bg-white p-5">

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-bold">
                              Recent orders
                            </h4>

                            <p className="mt-1 text-xs text-slate-400">
                              Automatically captured activity
                            </p>
                          </div>

                          <span className="text-xs font-semibold text-slate-500">
                            View all
                          </span>
                        </div>

                        <div className="mt-5 space-y-3">

                          {[
                            ["#FP-10482", "Nike Air Max", "₦85,000", "Confirmed"],
                            ["#FP-10481", "Classic Hoodie", "₦42,000", "Processing"],
                            ["#FP-10480", "Premium Set", "₦68,000", "Delivered"],
                            ["#FP-10479", "Leather Bag", "₦55,000", "Pending"]
                          ].map(
                            ([id, item, price, status]) => (
                              <div
                                key={id}
                                className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3"
                              >
                                <div className="flex items-center gap-3">

                                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                                    <Package size={14} />
                                  </div>

                                  <div>
                                    <p className="text-xs font-semibold">
                                      {item}
                                    </p>

                                    <p className="mt-0.5 text-[10px] text-slate-400">
                                      {id}
                                    </p>
                                  </div>
                                </div>

                                <div className="text-right">
                                  <p className="text-xs font-semibold">
                                    {price}
                                  </p>

                                  <p className="mt-0.5 text-[10px] text-slate-400">
                                    {status}
                                  </p>
                                </div>
                              </div>
                            )
                          )}

                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white">

                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                            <Bot size={15} />
                          </div>

                          <div>
                            <p className="text-xs font-semibold">
                              FlowPilot AI
                            </p>

                            <p className="text-[10px] text-slate-500">
                              Active now
                            </p>
                          </div>
                        </div>

                        <div className="mt-7 space-y-3">

                          <div className="max-w-[90%] rounded-xl rounded-tl-sm bg-white/10 p-3 text-[10px] leading-5 text-slate-300">
                            Customer asked about the availability of a black medium hoodie.
                          </div>

                          <div className="ml-auto max-w-[90%] rounded-xl rounded-tr-sm bg-white p-3 text-[10px] leading-5 text-slate-700">
                            Checked inventory. Black Hoodie — Medium is available.
                          </div>

                          <div className="max-w-[90%] rounded-xl rounded-tl-sm bg-white/10 p-3 text-[10px] leading-5 text-slate-300">
                            Customer confirmed the order. Creating order now.
                          </div>

                        </div>

                        <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[10px] text-slate-500">
                          <Sparkles size={12} />
                          AI workflow completed
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-6 py-12 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">

          {[
            ["24/7", "Automated operations"],
            ["1", "Unified workspace"],
            ["AI", "Intelligent workflows"],
            ["∞", "Scalable automation"]
          ].map(([value, label]) => (
            <div
              key={label}
              className="px-6 py-5 text-center"
            >
              <p className="text-3xl font-bold tracking-tight">
                {value}
              </p>

              <p className="mt-2 text-xs font-medium text-slate-400">
                {label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Everything connected
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Stop running your business
              <br />
              from ten different places.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              FlowPilot brings the repetitive operational work
              into one intelligent system.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {features.map(
              ({
                icon: Icon,
                title,
                description
              }) => (
                <div
                  key={title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:scale-105">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-lg font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {description}
                  </p>

                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-slate-950">
                    Explore
                    <ArrowRight size={13} />
                  </div>

                </div>
              )
            )}

          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="overflow-hidden bg-slate-950 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

          <div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
              <Bot size={22} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Intelligent automation
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              AI that understands
              <br />
              how your business works.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              FlowPilot isn't just another chatbot. Give it
              your business information, products, inventory
              and workflows so it can help turn customer
              requests into operational actions.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Understand customer intent",
                "Work with your business information",
                "Check product availability",
                "Create and update orders",
                "Keep operational activity organized"
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <Check size={13} />
                  </div>

                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="relative">

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
                    <Bot size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      FlowPilot AI
                    </p>

                    <p className="text-xs text-slate-500">
                      Workflow assistant
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Processing
                </div>

              </div>

              <div className="space-y-4 py-6">

                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-4 text-xs leading-6 text-slate-300">
                  Hi, do you have the black premium hoodie
                  in medium?
                </div>

                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white p-4 text-xs leading-6 text-slate-700">
                  Yes. I found 8 units available in
                  Medium. Would you like to place an order?
                </div>

                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-4 text-xs leading-6 text-slate-300">
                  Yes, please. I'll take one.
                </div>

                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white p-4 text-xs leading-6 text-slate-700">
                  Perfect. I've prepared the order for
                  confirmation.
                </div>

              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <Check size={14} />
                    <span className="text-xs font-semibold">
                      Order workflow
                    </span>
                  </div>

                  <span className="text-[10px] text-slate-500">
                    Completed
                  </span>

                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-white" />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Get started
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From setup to automation.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
              Set up FlowPilot once and let it handle the
              repetitive operational work.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {steps.map(
              ({
                number,
                icon: Icon,
                title,
                description
              }) => (
                <div
                  key={number}
                  className="relative rounded-3xl border border-slate-200 bg-white p-7"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                      <Icon size={19} />
                    </div>

                    <span className="text-xs font-bold text-slate-300">
                      {number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-lg font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {description}
                  </p>

                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* WHATSAPP SECTION */}
      <section className="border-b border-slate-100">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

          <div className="order-2 lg:order-1">

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white">
                    <MessageCircle size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Business WhatsApp
                    </p>

                    <p className="text-xs text-slate-400">
                      Connected to FlowPilot
                    </p>
                  </div>

                </div>

                <div className="space-y-3 py-5">

                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-100 p-3 text-xs leading-5 text-slate-600">
                    Hello, is the blue dress available
                    in size 10?
                  </div>

                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-slate-950 p-3 text-xs leading-5 text-white">
                    Yes, size 10 is available. Would you
                    like me to help you place the order?
                  </div>

                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-100 p-3 text-xs leading-5 text-slate-600">
                    Yes. I want one.
                  </div>

                </div>

                <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                    <Sparkles size={14} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold">
                      FlowPilot AI
                    </p>

                    <p className="text-[10px] text-slate-400">
                      Responded automatically
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="order-1 lg:order-2">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <MessageCircle size={21} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              WhatsApp commerce
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Your customers already
              <br />
              know where to find you.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Meet them there. FlowPilot helps turn
              conversations into structured business actions.
            </p>

            <div className="mt-8 space-y-4">

              {[
                ["Customer questions", "Respond to repetitive product and business questions."],
                ["Product discovery", "Use your inventory information during conversations."],
                ["Order collection", "Turn confirmed conversations into organized orders."],
                ["Customer history", "Keep useful customer and order information together."]
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100">
                    <Check size={13} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {title}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {text}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* OPERATIONS */}
      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Built for operations
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Less admin.
                <br />
                More business.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                FlowPilot helps remove the repetitive work
                between a customer asking for something and
                your business actually getting it done.
              </p>

              <Link
                to="/register"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start automating
                <ArrowRight size={16} />
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                [Clock3, "Save time", "Reduce repetitive customer and administrative work."],
                [RefreshCw, "Automate workflows", "Let routine actions happen without constant manual intervention."],
                [ShieldCheck, "Stay in control", "Keep visibility over important business activity."],
                [Globe2, "Work anywhere", "Run your operations from one cloud-based workspace."]
              ].map(
                ([Icon, title, text]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-slate-200 p-6"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-6 text-base font-bold">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {text}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </section>

      {/* USE CASES */}
      <section
        id="use-cases"
        className="scroll-mt-20 bg-slate-50"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Made for modern businesses
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                One platform.
                <br />
                Many possibilities.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Whether you're selling products or providing
              services, FlowPilot can become the operational
              layer behind your customer experience.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {useCases.map(
              ({
                icon: Icon,
                title,
                text
              }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-7"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-7 text-lg font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {text}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

      </section>

      {/* PAYMENTS */}
      <section>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

          <div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <CreditCard size={21} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Payments
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Give customers
              <br />
              ways to pay.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Configure the payment methods that work for
              your business and keep payment information
              connected to the order workflow.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">

              {[
                [CreditCard, "Paystack"],
                [Wallet, "Bank transfer"],
                [Package, "Cash on delivery"]
              ].map(([Icon, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <Icon size={18} />

                  <p className="mt-4 text-xs font-semibold">
                    {label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white">

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs text-slate-500">
                    Order total
                  </p>

                  <p className="mt-1 text-3xl font-bold">
                    ₦142,000
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-950">
                  <CreditCard size={19} />
                </div>

              </div>

              <div className="my-7 h-px bg-white/10" />

              <div className="space-y-3">

                {[
                  ["Classic Hoodie", "₦52,000"],
                  ["Premium Trousers", "₦65,000"],
                  ["Delivery", "₦25,000"]
                ].map(([item, price]) => (
                  <div
                    key={item}
                    className="flex justify-between text-xs"
                  >
                    <span className="text-slate-400">
                      {item}
                    </span>

                    <span className="font-semibold">
                      {price}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-7 rounded-xl bg-white p-4 text-slate-950">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                    <Check size={16} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Payment configured
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Ready for customer checkout
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-20 bg-slate-50"
      >

        <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Questions, answered.
            </h2>

          </div>

          <div className="mt-14 space-y-3">

            {faqs.map(
              ({
                question,
                answer
              }, index) => {

                const isOpen =
                  openFaq === index;

                return (
                  <div
                    key={question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(
                          isOpen
                            ? null
                            : index
                        )
                      }
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    >

                      <span className="text-sm font-semibold">
                        {question}
                      </span>

                      <ChevronDown
                        size={17}
                        className={`shrink-0 text-slate-400 transition ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-6 pb-6 pt-4">

                        <p className="text-sm leading-7 text-slate-500">
                          {answer}
                        </p>

                      </div>
                    )}

                  </div>
                );
              }
            )}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-20 text-center text-white shadow-2xl shadow-slate-300 sm:px-12 lg:px-20">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950">
            <Zap size={24} />
          </div>

          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Your business has enough
            manual work already.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Give your business an intelligent operational
            layer and spend more time growing instead of
            repeating the same tasks.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/register"
              className="group flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Create your workspace
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              to="/login"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Sign in
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200">

        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

          <div className="grid gap-12 md:grid-cols-4">

            <div className="md:col-span-2">

              <Link
                to="/"
                className="flex items-center gap-3"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Zap size={18} />
                </div>

                <span className="font-bold">
                  FlowPilot
                </span>

              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                An intelligent operational layer for
                modern businesses. Connect AI, customers,
                orders, inventory and payments.
              </p>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Product
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-500">

                <a
                  href="#features"
                  className="block hover:text-slate-950"
                >
                  Features
                </a>

                <a
                  href="#how-it-works"
                  className="block hover:text-slate-950"
                >
                  How it works
                </a>

                <a
                  href="#use-cases"
                  className="block hover:text-slate-950"
                >
                  Use cases
                </a>

                <Link
                  to="/register"
                  className="block hover:text-slate-950"
                >
                  Get started
                </Link>

              </div>

            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Account
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-500">

                <Link
                  to="/login"
                  className="block hover:text-slate-950"
                >
                  Sign in
                </Link>

                <Link
                  to="/register"
                  className="block hover:text-slate-950"
                >
                  Create account
                </Link>

                <a
                  href="#faq"
                  className="block hover:text-slate-950"
                >
                  FAQ
                </a>

              </div>

            </div>

          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-slate-100 pt-7 text-xs text-slate-400 sm:flex-row">

            <p>
              © 2026 FlowPilot. All rights reserved.
            </p>

            <div className="flex gap-5">

              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} />
                Secure workspace
              </span>

              <span className="flex items-center gap-1.5">
                <Zap size={13} />
                AI-powered
              </span>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

