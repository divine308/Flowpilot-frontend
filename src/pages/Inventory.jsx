import {
  useEffect,
  useState
} from "react";

import {
  Plus,
  Boxes,
  AlertTriangle
} from "lucide-react";

import Button from "../components/Button";
import Badge from "../components/Badge";
import { api } from "../services/api";

export default function Inventory() {
  const [inventory, setInventory] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [showForm, setShowForm] =
    useState(false);

  const [form, setForm] =
    useState({
      sku: "",
      name: "",
      size: "",
      quantity: "",
      price: ""
    });

  async function load() {
    try {
      const data =
        await api.inventory();

      setInventory(
        data.inventory || []
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function createItem(e) {
    e.preventDefault();

    await api.createInventory({
      ...form,

      quantity:
        Number(form.quantity),

      price:
        Number(form.price)
    });

    setForm({
      sku: "",
      name: "",
      size: "",
      quantity: "",
      price: ""
    });

    setShowForm(false);

    load();
  }

  return (
    <div className="space-y-8">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-slate-400">
            Operations
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
            Inventory
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage the inventory your AI workflows can act on.
          </p>
        </div>

        <Button
          onClick={() =>
            setShowForm(
              !showForm
            )
          }
        >
          <Plus size={16} />
          Add item
        </Button>
      </section>

      {showForm && (
        <form
          onSubmit={createItem}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 md:grid-cols-5">
            {[
              ["sku", "SKU"],
              ["name", "Product name"],
              ["size", "Size"],
              ["quantity", "Quantity"],
              ["price", "Price"]
            ].map(
              ([key, label]) => (
                <div key={key}>
                  <label className="mb-2 block text-xs font-semibold text-slate-600">
                    {label}
                  </label>

                  <input
                    required={
                      key !== "size"
                    }
                    type={
                      key ===
                        "quantity" ||
                      key === "price"
                        ? "number"
                        : "text"
                    }
                    value={
                      form[key]
                    }
                    onChange={e =>
                      setForm({
                        ...form,
                        [key]:
                          e.target
                            .value
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
                  />
                </div>
              )
            )}
          </div>

          <div className="mt-5 flex justify-end">
            <Button type="submit">
              Create inventory item
            </Button>
          </div>
        </form>
      )}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <div className="flex items-center gap-3">
            <Boxes
              size={18}
              className="text-slate-500"
            />

            <div>
              <h2 className="font-bold text-slate-950">
                Product inventory
              </h2>

              <p className="text-xs text-slate-400">
                {inventory.length} items
              </p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center text-sm text-slate-400">
            Loading inventory...
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead className="bg-slate-50">
                <tr className="text-xs text-slate-400">
                  <th className="px-5 py-3 font-medium">
                    Product
                  </th>

                  <th className="px-5 py-3 font-medium">
                    SKU
                  </th>

                  <th className="px-5 py-3 font-medium">
                    Size
                  </th>

                  <th className="px-5 py-3 font-medium">
                    Quantity
                  </th>

                  <th className="px-5 py-3 font-medium">
                    Price
                  </th>

                  <th className="px-5 py-3 font-medium">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {inventory.map(
                  item => {
                    const low =
                      item.quantity <=
                      5;

                    return (
                      <tr
                        key={
                          item._id
                        }
                        className="hover:bg-slate-50"
                      >
                        <td className="px-5 py-4">
                          <p className="text-sm font-semibold text-slate-900">
                            {item.name}
                          </p>
                        </td>

                        <td className="px-5 py-4 font-mono text-xs text-slate-500">
                          {item.sku}
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-500">
                          {item.size ||
                            "—"}
                        </td>

                        <td className="px-5 py-4 text-sm font-semibold">
                          {item.quantity}
                        </td>

                        <td className="px-5 py-4 text-sm font-medium">
                          ₦
                          {item.price?.toLocaleString()}
                        </td>

                        <td className="px-5 py-4">
                          {low ? (
                            <Badge type="warning">
                              <span className="mr-1">
                                <AlertTriangle size={11} />
                              </span>
                              Low stock
                            </Badge>
                          ) : (
                            <Badge type="success">
                              In stock
                            </Badge>
                          )}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}