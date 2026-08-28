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
  Zap,
  ChevronDown
} from "lucide-react";

import Button from "../components/Button";
import {
  api,

} from "../services/api";

export default function Register() {
  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
      businessName: "",
      category: ""
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
      `/verify-email?email=${encodeURIComponent(form.email)}`
    );

  } catch (error) {
    setError(error.message);
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
                  Business name
                </label>

                <input
                  name="businessName"
                  required
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="Acme Store"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                />
              </div>

             <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Business category
                </label>

                <div className="relative">
                  <select
                    name="category"
                    required
                    value={form.category}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>

                    <option value="Retail">
                      Retail
                    </option>

                    <option value="Clothing & Fashion">
                      Clothing & Fashion
                    </option>

                    <option value="Beauty & Cosmetics">
                      Beauty & Cosmetics
                    </option>

                    <option value="Food & Restaurant">
                      Food & Restaurant
                    </option>

                    <option value="Grocery & Supermarket">
                      Grocery & Supermarket
                    </option>

                    <option value="Electronics">
                      Electronics
                    </option>

                    <option value="Health & Wellness">
                      Health & Wellness
                    </option>

                    <option value="Fitness & Sports">
                      Fitness & Sports
                    </option>

                    <option value="Education">
                      Education
                    </option>

                    <option value="Professional Services">
                      Professional Services
                    </option>

                    <option value="Consulting">
                      Consulting
                    </option>

                    <option value="Technology">
                      Technology
                    </option>

                    <option value="Software & SaaS">
                      Software & SaaS
                    </option>

                    <option value="Marketing & Advertising">
                      Marketing & Advertising
                    </option>

                    <option value="Real Estate">
                      Real Estate
                    </option>

                    <option value="Construction">
                      Construction
                    </option>

                    <option value="Automotive">
                      Automotive
                    </option>

                    <option value="Travel & Tourism">
                      Travel & Tourism
                    </option>

                    <option value="Hospitality">
                      Hospitality
                    </option>

                    <option value="Logistics & Delivery">
                      Logistics & Delivery
                    </option>

                    <option value="Financial Services">
                      Financial Services
                    </option>

                    <option value="Photography">
                      Photography
                    </option>

                    <option value="Creative Services">
                      Creative Services
                    </option>

                    <option value="Events & Entertainment">
                      Events & Entertainment
                    </option>

                    <option value="Agriculture">
                      Agriculture
                    </option>

                    <option value="Manufacturing">
                      Manufacturing
                    </option>

                    <option value="Home & Furniture">
                      Home & Furniture
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
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