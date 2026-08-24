import {
  ShieldCheck,
  MessageCircle,
  Database,
  Lock
} from "lucide-react";

import Badge from "../components/Badge";

export default function Settings() {
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
          Configure your FlowPilot environment.
        </p>
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
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
            <MessageCircle
              size={18}
              className="text-slate-500"
            />

            <h2 className="font-bold text-slate-950">
              WhatsApp
            </h2>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <p className="font-semibold">
                WhatsApp Business API
              </p>

              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              Incoming customer messages can trigger the same workflow engine as requests from the dashboard.
            </p>
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
      </div>
    </div>
  );
}