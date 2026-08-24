import {
  useState
} from "react";

import {
  BrainCircuit,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Database,
  ShoppingBag,
  ShieldCheck,
  MessageCircle
} from "lucide-react";

import Button from "../components/Button";
import Badge from "../components/Badge";
import { api } from "../services/api";

export default function Workflow() {
  const [message, setMessage] =
    useState(
      "Hi, I'm Chika. I want 2 black oversized shirts in size L. Do you have them?"
    );

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  async function runWorkflow(e) {
    e.preventDefault();

    setLoading(true);
    setResult(null);

    try {
      const data =
        await api.processWorkflow({
          message,
          source: "web"
        });

      setResult(data);
    } catch (error) {
      setResult({
        status: "error",
        message:
          error.message
      });
    } finally {
      setLoading(false);
    }
  }

  const steps = [
    {
      title: "Request",
      description:
        "Customer message received",
      icon: MessageCircle
    },

    {
      title: "AI understanding",
      description:
        "Intent and entities extracted",
      icon: BrainCircuit
    },

    {
      title: "Decision",
      description:
        "Confidence and policy checks",
      icon: ShieldCheck
    },

    {
      title: "Action",
      description:
        "Inventory or order operation",
      icon: Database
    },

    {
      title: "Response",
      description:
        "Customer receives outcome",
      icon: Sparkles
    }
  ];

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-slate-400">
          Automation engine
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          AI Workflow
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Send a natural-language customer request through the complete FlowPilot decision pipeline.
        </p>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <MessageCircle size={18} />
            </div>

            <div>
              <h2 className="font-bold text-slate-950">
                Test a request
              </h2>

              <p className="text-xs text-slate-400">
                Simulate a customer conversation
              </p>
            </div>
          </div>

          <form
            onSubmit={runWorkflow}
            className="mt-6"
          >
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Customer message
            </label>

            <textarea
              value={message}
              onChange={e =>
                setMessage(
                  e.target.value
                )
              }
              rows={7}
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-900 outline-none transition focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-100"
              placeholder="Type a customer request..."
            />

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                AI will determine the next action automatically.
              </span>

              <Button
                type="submit"
                loading={loading}
              >
                Run AI
                <ArrowRight size={16} />
              </Button>
            </div>
          </form>

          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">
              Example requests
            </p>

            <div className="mt-3 space-y-2">
              {[
                "Do you have the black shirt in medium?",
                "I want to order 3 red dresses.",
                "Where is order FP-12345678?"
              ].map(example => (
                <button
                  key={example}
                  onClick={() =>
                    setMessage(
                      example
                    )
                  }
                  className="block w-full rounded-lg bg-white px-3 py-2 text-left text-xs text-slate-600 transition hover:bg-slate-100"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-slate-950">
                Decision pipeline
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Real-time orchestration
              </p>
            </div>

            {result && (
              <Badge
                type={
                  result.status ===
                  "completed"
                    ? "success"
                    : result.status ===
                      "needs_review"
                    ? "warning"
                    : "neutral"
                }
              >
                {result.status}
              </Badge>
            )}
          </div>

          <div className="mt-8 space-y-1">
            {steps.map(
              (
                step,
                index
              ) => {
                const Icon =
                  step.icon;

                const active =
                  result
                    ? index <
                      4
                    : index === 0;

                return (
                  <div
                    key={
                      step.title
                    }
                    className="flex items-center gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          transition
                          ${
                            active
                              ? "border-slate-950 bg-slate-950 text-white"
                              : "border-slate-200 bg-white text-slate-300"
                          }
                        `}
                      >
                        <Icon size={18} />
                      </div>

                      {index <
                        steps.length -
                          1 && (
                        <div className="h-8 w-px bg-slate-200" />
                      )}
                    </div>

                    <div className="flex-1">
                      <p
                        className={`text-sm font-semibold ${
                          active
                            ? "text-slate-950"
                            : "text-slate-400"
                        }`}
                      >
                        {step.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {step.description}
                      </p>
                    </div>

                    {active &&
                      index < 4 && (
                        <CheckCircle2
                          size={17}
                          className="text-emerald-500"
                        />
                      )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {result && (
        <div className="grid gap-6 xl:grid-cols-[1fr_1.5fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <BrainCircuit size={18} />
              </div>

              <div>
                <h2 className="font-bold text-slate-950">
                  AI decision
                </h2>

                <p className="text-xs text-slate-400">
                  Structured interpretation
                </p>
              </div>
            </div>

            {result.ai && (
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Intent
                  </p>

                  <p className="mt-1 text-sm font-bold capitalize text-slate-950">
                    {result.ai.intent?.replace(
                      /_/g,
                      " "
                    )}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between">
                    <p className="text-xs font-medium text-slate-400">
                      Confidence
                    </p>

                    <p className="text-xs font-bold text-slate-900">
                      {Math.round(
                        result.ai.confidence *
                          100
                      )}
                      %
                    </p>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-slate-950 transition-all"
                      style={{
                        width: `${
                          result.ai.confidence *
                          100
                        }%`
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Product
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-900">
                      {result.ai.product ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Size
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-900">
                      {result.ai.size ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Quantity
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-900">
                      {result.ai.quantity ||
                        "—"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Action
                    </p>

                    <p className="mt-1 text-xs font-semibold capitalize text-slate-900">
                      {result.ai.recommendedAction?.replace(
                        /_/g,
                        " "
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  ${
                    result.status ===
                    "completed"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  }
                `}
              >
                {result.status ===
                "completed" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertTriangle size={18} />
                )}
              </div>

              <div>
                <h2 className="font-bold text-slate-950">
                  Workflow outcome
                </h2>

                <p className="text-xs text-slate-400">
                  Final system decision
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Response
              </p>

              <p className="mt-3 text-lg font-medium leading-8">
                {result.message}
              </p>

              {result.order && (
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/10 p-4">
                  <ShoppingBag size={18} />

                  <div>
                    <p className="text-xs text-slate-400">
                      Order created
                    </p>

                    <p className="mt-1 font-bold">
                      {
                        result.order
                          .orderNumber
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                Workflow ID
              </span>

              <span className="font-mono text-slate-600">
                {result.workflowId ||
                  "—"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}