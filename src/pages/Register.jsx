import {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  ArrowRight,
  Check,
  Zap
} from "lucide-react";

import Button from "../components/Button";
import { api } from "../services/api";

export default function Register() {
  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      name: "",
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
    await api.register(form);

    navigate(
      `/verify-email?email=${encodeURIComponent(
        form.email
      )}`
    );
  } catch (error) {
    setError(
      error.message
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
        <div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40 lg:grid-cols-2">
          <div className="hidden bg-slate-950 p-12 text-white lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
                <Zap size={19} />
              </div>

              <span className="font-bold">
                FlowPilot
              </span>
            </div>

            <div className="mt-28">
              <h1 className="text-4xl font-bold tracking-tight">
                Build a smarter operation.
              </h1>

              <p className="mt-5 leading-7 text-slate-400">
                Start automating repetitive customer and business workflows with an intelligent operational layer.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "AI request understanding",
                  "Inventory-aware decisions",
                  "Automated order processing",
                  "WhatsApp integration",
                  "Complete audit trail"
                ].map(
                  item => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                        <Check size={12} />
                      </div>

                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-12">
            <div className="lg:hidden">
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Zap size={19} />
                </div>

                <span className="font-bold">
                  FlowPilot
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-500">
              Get started
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Create your workspace
            </h2>

            {error && (
              <div className="mt-5 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full name
                </label>

                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                />
              </div>

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
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <input
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  value={
                    form.password
                  }
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                />
              </div>

              <Button
                type="submit"
                loading={loading}
                className="w-full py-3"
              >
                Create workspace
                <ArrowRight size={16} />
              </Button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-slate-950"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}