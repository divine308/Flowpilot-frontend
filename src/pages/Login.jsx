import {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

import Button from "../components/Button";
import { api, saveToken } from "../services/api";

export default function Login({
  onLogin
}) {
  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      email: "",
      password: ""
    });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
     const data =
  await api.login(form);

saveToken(data.token);

onLogin(data.user);

navigate("/");
    } catch (error) {
      setError(
        error.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      <div className="hidden w-1/2 flex-col justify-between bg-slate-950 p-12 text-white lg:flex">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
            <Zap size={19} />
          </div>

          <span className="font-bold">
            FlowPilot
          </span>
        </div>

        <div className="max-w-lg">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-500">
            AI Operations Platform
          </p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight">
            Turn customer requests into actions.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-slate-400">
            FlowPilot connects AI, inventory, orders and communication into one intelligent operational workflow.
          </p>

          <div className="mt-10 flex gap-8">
            {[
              ["AI", "Decision engine"],
              ["24/7", "Automation"],
              ["100%", "Auditable"]
            ].map(
              ([value, label]) => (
                <div key={value}>
                  <p className="text-xl font-bold">
                    {value}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {label}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <p className="text-xs text-slate-600">
          © 2026 FlowPilot
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Zap size={19} />
              </div>

              <span className="font-bold">
                FlowPilot
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500">
              Welcome back
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Sign in to your workspace
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Manage your AI-powered operations from one place.
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
              />
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-semibold text-slate-500 hover:text-slate-950"
                >
                  Forgot password?
                </button>
              </div>

              <input
                name="password"
                type="password"
                required
                value={
                  form.password
                }
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
              />
            </div>

            <Button
              type="submit"
              loading={loading}
              className="w-full py-3"
            >
              Sign in
              <ArrowRight size={16} />
            </Button>
          </form>

          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck size={15} />

            Your session is secured with JWT authentication.
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-slate-950 hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}