import {
  useEffect,
  useState
} from "react";

import {
  Activity,
  Boxes,
  BrainCircuit,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  AlertCircle
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import StatCard from "../components/StatCard";
import Badge from "../components/Badge";
import { api } from "../services/api";

export default function Dashboard() {
  const [logs, setLogs] =
    useState([]);

  const [inventory, setInventory] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    async function load() {
      try {
        const [
          logData,
          inventoryData,
          orderData
        ] = await Promise.all([
          api.logs(),
          api.inventory(),
          api.orders()
        ]);

        setLogs(
          logData.logs || []
        );

        setInventory(
          inventoryData.inventory || []
        );

        setOrders(
          orderData.orders || []
        );
      } catch {
        // Dashboard can still render.
      }
    }

    load();
  }, []);

  const successful =
    logs.filter(
      x => x.status === "success"
    ).length;

  const review =
    logs.filter(
      x =>
        x.status === "warning"
    ).length;

  const lowStock =
    inventory.filter(
      x => x.quantity <= 5
    ).length;

  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-slate-400">
            Monday, August 24
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
            Good morning.
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Here's what's happening across your operations today.
          </p>
        </div>

        <Link
          to="/workflow"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Run workflow
          <ArrowRight size={16} />
        </Link>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Workflow events"
          value={logs.length}
          description="Total recorded events"
          icon={Activity}
          trend="+12%"
        />

        <StatCard
          label="Successful actions"
          value={successful}
          description="Completed successfully"
          icon={CheckCircle2}
          trend="+18%"
        />

        <StatCard
          label="Low stock items"
          value={lowStock}
          description="Need attention"
          icon={Boxes}
        />

        <StatCard
          label="Human reviews"
          value={review}
          description="Flagged by AI"
          icon={BrainCircuit}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 p-5">
            <div>
              <h2 className="font-bold text-slate-950">
                Recent activity
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Live operational events
              </p>
            </div>

            <Link
              to="/activity"
              className="text-xs font-semibold text-slate-500 hover:text-slate-950"
            >
              View all
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {logs
              .slice(0, 6)
              .map(log => (
                <div
                  key={log._id}
                  className="flex items-start gap-4 p-5"
                >
                  <div
                    className={`
                      mt-0.5
                      flex
                      h-9
                      w-9
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
                          : "bg-slate-100 text-slate-500"
                      }
                    `}
                  >
                    {log.status ===
                    "success" ? (
                      <CheckCircle2 size={16} />
                    ) : log.status ===
                      "warning" ? (
                      <AlertCircle size={16} />
                    ) : (
                      <Clock3 size={16} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
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
                            : "neutral"
                        }
                      >
                        {log.status}
                      </Badge>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {log.message}
                    </p>

                    <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                      {log.source}
                    </p>
                  </div>
                </div>
              ))}

            {logs.length === 0 && (
              <div className="p-12 text-center">
                <Activity
                  className="mx-auto text-slate-300"
                  size={28}
                />

                <p className="mt-3 text-sm font-semibold text-slate-700">
                  No activity yet
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Run your first AI workflow.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageCircle size={17} />
              </div>

              <div>
                <h2 className="font-bold text-slate-950">
                  WhatsApp
                </h2>

                <p className="text-xs text-slate-400">
                  Channel status
                </p>
              </div>

              <span className="ml-auto h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>
          </div>

          <div className="p-5">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Connected
              </p>

              <p className="mt-2 text-lg font-bold text-slate-950">
                WhatsApp Business
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Customer messages can enter the same AI workflow used by your web application.
              </p>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Messages processed
                </span>

                <span className="font-semibold text-slate-900">
                  {logs.filter(
                    x =>
                      x.source ===
                      "whatsapp"
                  ).length}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Automation rate
                </span>

                <span className="font-semibold text-emerald-600">
                  94.2%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-slate-950">
              Latest orders
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Recently created orders
            </p>
          </div>

          <Link
            to="/orders"
            className="text-xs font-semibold text-slate-500 hover:text-slate-950"
          >
            View all
          </Link>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs text-slate-400">
                <th className="pb-3 font-medium">
                  Order
                </th>

                <th className="pb-3 font-medium">
                  Customer
                </th>

                <th className="pb-3 font-medium">
                  Total
                </th>

                <th className="pb-3 font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {orders
                .slice(0, 5)
                .map(order => (
                  <tr
                    key={order._id}
                  >
                    <td className="py-4 text-sm font-semibold text-slate-900">
                      {order.orderNumber}
                    </td>

                    <td className="py-4 text-sm text-slate-500">
                      {order.customer?.name ||
                        "Customer"}
                    </td>

                    <td className="py-4 text-sm font-medium text-slate-900">
                      ₦
                      {order.total?.toLocaleString()}
                    </td>

                    <td className="py-4">
                      <Badge type="success">
                        {order.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}