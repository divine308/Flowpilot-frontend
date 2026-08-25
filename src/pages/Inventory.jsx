import {
  useEffect,
  useState
} from "react";
import {
  Plus,
  Boxes,
  AlertTriangle,
  Trash2,
  Loader2,
  X
} from "lucide-react";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { api } from "../services/api";
export default function Inventory() {
  const [inventory, setInventory] =
    useState([]);
  const [loading, setLoading] =
    useState(true);
  const [creating, setCreating] =
    useState(false);
  const [deletingId, setDeletingId] =
    useState(null);
  const [itemToDelete, setItemToDelete] =
    useState(null);
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
    } catch (error) {
      console.error(
        "Failed to load inventory:",
        error
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
    if (creating) {
      return;
    }
    try {
      setCreating(true);
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
      await load();
    } catch (error) {
      console.error(
        "Failed to create inventory item:",
        error
      );
      alert(
        error.message ||
        "Failed to create inventory item"
      );
    } finally {
      setCreating(false);
    }
  }
  function openDeleteModal(item) {
    if (deletingId) {
      return;
    }
    setItemToDelete(item);
  }
  function closeDeleteModal() {
    if (deletingId) {
      return;
    }
    setItemToDelete(null);
  }
  async function deleteItem() {
    if (!itemToDelete || deletingId) {
      return;
    }
    const id =
      itemToDelete._id;
    try {
      setDeletingId(id);
      await api.deleteInventory(id);
      setInventory(current =>
        current.filter(
          item => item._id !== id
        )
      );
      setItemToDelete(null);
    } catch (error) {
      console.error(
        "Failed to delete inventory item:",
        error
      );
      alert(
        error.message ||
        "Failed to delete inventory item"
      );
    } finally {
      setDeletingId(null);
    }
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
            <Button
              type="submit"
              disabled={creating}
            >
              {creating ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                  Creating...
                </>
              ) : (
                <>
                  <Plus size={16} />
                  Create inventory item
                </>
              )}
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
          <div className="flex flex-col items-center justify-center gap-3 p-12">
            <Loader2
              size={24}
              className="animate-spin text-slate-500"
            />
            <p className="text-sm text-slate-400">
              Loading inventory...
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
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
                  <th className="px-5 py-3 text-right font-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inventory.map(
                  item => {
                    const low =
                      item.quantity <=
                      5;
                    const deleting =
                      deletingId ===
                      item._id;
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
                                <AlertTriangle
                                  size={11}
                                />
                              </span>
                              Low stock
                            </Badge>
                          ) : (
                            <Badge type="success">
                              In stock
                            </Badge>
                          )}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              openDeleteModal(
                                item
                              )
                            }
                            disabled={
                              deleting
                            }
                            title="Delete inventory item"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {deleting ? (
                              <Loader2
                                size={16}
                                className="animate-spin"
                              />
                            ) : (
                              <Trash2
                                size={16}
                              />
                            )}
                          </button>
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
      {itemToDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
          onClick={closeDeleteModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-inventory-title"
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
            onClick={e =>
              e.stopPropagation()
            }
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Trash2 size={20} />
              </div>
              <button
                type="button"
                onClick={
                  closeDeleteModal
                }
                disabled={Boolean(
                  deletingId
                )}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mt-5">
              <h3
                id="delete-inventory-title"
                className="text-lg font-bold text-slate-950"
              >
                Delete inventory item?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                You're about to delete{" "}
                <span className="font-semibold text-slate-900">
                  {itemToDelete.name}
                </span>
                . This action cannot be undone.
              </p>
              <div className="mt-4 rounded-xl bg-slate-50 p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">
                    SKU
                  </span>
                  <span className="font-mono font-medium text-slate-900">
                    {itemToDelete.sku}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-slate-500">
                    Quantity
                  </span>
                  <span className="font-semibold text-slate-900">
                    {itemToDelete.quantity}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={
                  closeDeleteModal
                }
                disabled={Boolean(
                  deletingId
                )}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={
                  deleteItem
                }
                disabled={Boolean(
                  deletingId
                )}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deletingId ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2
                      size={16}
                    />
                    Delete item
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}