import {
  useEffect,
  useState
} from "react";

import {
  ShoppingBag,
  Search
} from "lucide-react";

import Badge from "../components/Badge";
import { api } from "../services/api";

export default function Orders() {
  const [orders, setOrders] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    api.orders()
      .then(data =>
        setOrders(
          data.orders || []
        )
      );
  }, []);

  const filtered =
    orders.filter(order =>
      order.orderNumber
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm text-slate-400">
          Operations
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Orders
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Orders created by FlowPilot workflows.
        </p>
      </section>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag
              size={18}
              className="text-slate-500"
            />

            <span className="font-bold text-slate-950">
              All orders
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <Search
              size={15}
              className="text-slate-400"
            />

            <input
              value={search}
              onChange={e =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search order..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 sm:w-52"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-slate-50">
              <tr className="text-xs text-slate-400">
                <th className="px-5 py-3 font-medium">
                  Order
                </th>

                <th className="px-5 py-3 font-medium">
                  Customer
                </th>

                <th className="px-5 py-3 font-medium">
                  Items
                </th>

                <th className="px-5 py-3 font-medium">
                  Total
                </th>

                <th className="px-5 py-3 font-medium">
                  Status
                </th>

                <th className="px-5 py-3 font-medium">
                  Source
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filtered.map(
                order => (
                  <tr
                    key={
                      order._id
                    }
                    className="hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 text-sm font-bold text-slate-900">
                      {
                        order.orderNumber
                      }
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {order.customer?.name ||
                        "—"}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {order.items
                        ?.length ||
                        0}
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                      ₦
                      {order.total?.toLocaleString()}
                    </td>

                    <td className="px-5 py-4">
                      <Badge
                        type={
                          order.status ===
                          "confirmed"
                            ? "success"
                            : "warning"
                        }
                      >
                        {
                          order.status
                        }
                      </Badge>
                    </td>

                    <td className="px-5 py-4 text-xs font-medium uppercase text-slate-400">
                      {
                        order.source
                      }
                    </td>
                  </tr>
                )
              )}

              {filtered.length ===
                0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="p-12 text-center text-sm text-slate-400"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}