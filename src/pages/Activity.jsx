import {
  useEffect,
  useState
} from "react";

import {
  Activity,
  CheckCircle2,
  AlertTriangle,
  XCircle
} from "lucide-react";

import Badge from "../components/Badge";
import { api } from "../services/api";

export default function ActivityPage() {
  const [logs, setLogs] =
    useState([]);

  useEffect(() => {
    api.logs()
      .then(data =>
        setLogs(
          data.logs || []
        )
      );
  }, []);

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm text-slate-400">
          Observability
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Activity
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          A complete audit trail of FlowPilot decisions and actions.
        </p>
      </section>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <div className="flex items-center gap-3">
            <Activity
              size={18}
              className="text-slate-500"
            />

            <div>
              <h2 className="font-bold text-slate-950">
                Audit trail
              </h2>

              <p className="text-xs text-slate-400">
                Every operational decision is recorded.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {logs.map(log => {
            const Icon =
              log.status ===
              "success"
                ? CheckCircle2
                : log.status ===
                  "warning"
                ? AlertTriangle
                : XCircle;

            return (
              <div
                key={log._id}
                className="flex gap-4 p-5"
              >
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${
                      log.status ===
                      "success"
                        ? "bg-emerald-50 text-emerald-600"
                        : log.status ===
                          "warning"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-red-50 text-red-600"
                    }
                  `}
                >
                  <Icon size={17} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-slate-900">
                      {log.event}
                    </p>

                    <Badge
                      type={
                        log.status ===
                        "success"
                          ? "success"
                          : log.status ===
                            "warning"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {
                        log.status
                      }
                    </Badge>

                    <Badge>
                      {
                        log.source
                      }
                    </Badge>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {log.message}
                  </p>

                  <p className="mt-2 font-mono text-[10px] text-slate-400">
                    Workflow:{" "}
                    {
                      log.workflowId
                    }
                  </p>
                </div>

                <p className="hidden shrink-0 text-xs text-slate-400 sm:block">
                  {new Date(
                    log.createdAt
                  ).toLocaleString()}
                </p>
              </div>
            );
          })}

          {logs.length === 0 && (
            <div className="p-16 text-center">
              <Activity
                className="mx-auto text-slate-300"
                size={32}
              />

              <p className="mt-3 text-sm font-semibold text-slate-700">
                Nothing recorded yet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}