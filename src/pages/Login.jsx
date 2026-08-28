
import {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";

import Button from "../components/Button";
import {
  api,
  saveToken
} from "../services/api";

export default function Login({
  onLogin
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    if (error) {
      setError("");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = await api.login(form);

      saveToken(data.token);

      onLogin(data.user);

      navigate("/");
    } catch (error) {
      setError(
        error?.message ||
        "Unable to sign in. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-950/10">
              <Zap size={19} />
            </div>

            <span className="text-lg font-bold tracking-tight text-slate-950">
              FlowPilot
            </span>
          </Link>

          <div className="flex items-center gap-3">

            <span className="hidden text-sm text-slate-500 sm:block">
              Don't have an account?
            </span>

            <Link
              to="/register"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Get started
            </Link>

          </div>

        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-12 lg:px-8">

        <div className="grid w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:min-h-[680px] lg:flex-col lg:justify-between">

            {/* Background decoration */}
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

            {/* Brand */}
            <div className="relative flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
                <Zap size={19} />
              </div>

              <span className="font-bold">
                FlowPilot
              </span>

            </div>

            {/* Content */}
            <div className="relative max-w-lg">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-slate-300">
                <Sparkles size={13} />
                AI-powered business operations
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight">
                Welcome back.
                <br />
                <span className="text-slate-500">
                  Your business is waiting.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
                Sign in to continue managing your customers,
                orders, inventory, payments and automated
                workflows from one intelligent workspace.
              </p>

              {/* Features */}
              <div className="mt-10 space-y-4">

                {[
                  "Manage customer conversations",
                  "Track orders and inventory",
                  "Automate repetitive workflows",
                  "Monitor your business operations"
                ].map(item => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                      <CheckCircle2 size={14} />
                    </div>

                    {item}

                  </div>
                ))}

              </div>

            </div>

            {/* Footer */}
            <div className="relative flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck size={14} />
              Secure AI operations workspace
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center p-7 sm:p-12 lg:p-14">

            <div className="w-full max-w-md">

              {/* Mobile brand */}
              <div className="mb-10 lg:hidden">

                <Link
                  to="/"
                  className="flex items-center gap-3"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Zap size={19} />
                  </div>

                  <span className="font-bold text-slate-950">
                    FlowPilot
                  </span>

                </Link>

              </div>

              {/* Heading */}
              <div>

                <p className="text-sm font-semibold text-slate-500">
                  Welcome back
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Sign in to your workspace
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Continue managing your AI-powered business
                  operations from one place.
                </p>

              </div>

              {/* Error */}
              {error && (
                <div className="mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                  {error}
                </div>
              )}

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                  />

                </div>

                {/* Password */}
                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-slate-700"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-xs font-semibold text-slate-500 transition hover:text-slate-950"
                    >
                      Forgot password?
                    </Link>

                  </div>

                  <div className="relative">

                    <input
                      id="password"
                      name="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      required
                      minLength={8}
                      autoComplete="current-password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-12 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-950"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  loading={loading}
                  className="w-full py-3.5"
                >
                  Sign in
                  <ArrowRight size={16} />
                </Button>

              </form>

              {/* Security */}
              <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white">
                  <ShieldCheck
                    size={16}
                    className="text-slate-700"
                  />
                </div>

                <div>

                  <p className="text-xs font-semibold text-slate-700">
                    Secure workspace
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-slate-400">
                    Your session is protected with secure
                    JWT authentication.
                  </p>

                </div>

              </div>

              {/* Register */}
              <p className="mt-8 text-center text-sm text-slate-500">

                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="font-semibold text-slate-950 hover:underline"
                >
                  Create your workspace
                </Link>

              </p>

              {/* Back */}
              <div className="mt-6 text-center">

                <Link
                  to="/"
                  className="text-xs font-medium text-slate-400 transition hover:text-slate-950"
                >
                  ← Back to FlowPilot
                </Link>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
