import {
  useEffect,
  useState
} from "react";

import {
  CreditCard,
  Wallet,
  Clock3,
  TrendingUp,
  ArrowDownToLine,
  Search,
  Building2,
  RefreshCw
} from "lucide-react";

import Badge from "../components/Badge";
import Button from "../components/Button";
import StatCard from "../components/StatCard";

import { api } from "../services/api";

export default function Payments() {
  const [payments, setPayments] =
    useState([]);

  const [payouts, setPayouts] =
    useState([]);

  const [balance, setBalance] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [error, setError] =
    useState("");

  async function loadPayments(
    showRefresh = false
  ) {
    try {
      setError("");

      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const [
        paymentsData,
        balanceData,
        payoutsData
      ] = await Promise.all([
        api.payments(),
        api.getBalance(),
        api.payouts()
      ]);

      setPayments(
        paymentsData.payments || []
      );

      setBalance(
        balanceData || null
      );

      setPayouts(
        payoutsData.payouts || []
      );
    } catch (error) {
      setError(
        error.message ||
          "Unable to load payment data."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadPayments();
  }, []);

  const filteredPayments =
    payments.filter(payment => {
      const query =
        search.toLowerCase();

      return (
        payment.reference
          ?.toLowerCase()
          .includes(query) ||
        payment.order?.orderNumber
          ?.toLowerCase()
          .includes(query) ||
        payment.customer?.name
          ?.toLowerCase()
          .includes(query) ||
        payment.customer?.email
          ?.toLowerCase()
          .includes(query)
      );
    });

  const successfulPayments =
    payments.filter(
      payment =>
        payment.status ===
        "success"
    );

  const pendingPayments =
    payments.filter(
      payment =>
        payment.status ===
        "pending"
    );

  const totalEarned =
    successfulPayments.reduce(
      (sum, payment) =>
        sum +
        Number(
          payment.merchantAmount || 0
        ),
      0
    );

  const totalFees =
    successfulPayments.reduce(
      (sum, payment) =>
        sum +
        Number(
          payment.platformFee || 0
        ),
      0
    );

  function formatMoney(
    amount
  ) {
    return `₦${Number(
      amount || 0
    ).toLocaleString()}`;
  }

  function paymentBadge(
    status
  ) {
    switch (status) {
      case "success":
        return "success";

      case "failed":
      case "reversed":
        return "danger";

      case "pending":
      case "abandoned":
        return "warning";

      default:
        return "neutral";
    }
  }

  return (
    <div className="space-y-8">

      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Financial operations
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
              Payments
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Monitor customer payments, earnings and merchant payouts.
            </p>
          </div>

          <Button
            variant="secondary"
            loading={refreshing}
            onClick={() =>
              loadPayments(true)
            }
          >
            <RefreshCw size={15} />
            Refresh
          </Button>
        </div>
      </section>

      {error && (
        <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          label="Available balance"
          value={formatMoney(
            balance?.balance?.available
          )}
          description="Available for payout"
          icon={Wallet}
        />

        <StatCard
          label="Pending balance"
          value={formatMoney(
            balance?.balance?.pending
          )}
          description="Awaiting settlement"
          icon={Clock3}
        />

        <StatCard
          label="Total earned"
          value={formatMoney(
            balance?.balance?.totalEarned ??
              totalEarned
          )}
          description={`${successfulPayments.length} successful payments`}
          icon={TrendingUp}
        />

        <StatCard
          label="Platform fees"
          value={formatMoney(
            balance?.balance?.totalFees ??
              totalFees
          )}
          description="Fees collected by FlowPilot"
          icon={CreditCard}
        />

      </section>

      <section className="grid gap-4 lg:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-bold text-slate-950">
                Payment activity
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {payments.length} total transactions
              </p>
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
                placeholder="Search payment..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 sm:w-56"
              />
            </div>

          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">
                Successful
              </p>

              <p className="mt-1 text-xl font-bold text-slate-950">
                {successfulPayments.length}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-400">
                Pending
              </p>

              <p className="mt-1 text-xl font-bold text-slate-950">
                {pendingPayments.length}
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-sm">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <ArrowDownToLine size={18} />
            </div>

            <div>
              <p className="text-sm font-bold">
                Payouts
              </p>

              <p className="text-xs text-slate-400">
                Merchant settlements
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs text-slate-400">
              Payout status
            </p>

            <p className="mt-1 text-lg font-semibold">
              {balance?.payoutEnabled
                ? "Account verified"
                : "Setup required"}
            </p>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-400">
            Configure your bank account to receive funds from successful customer payments.
          </p>

          <Button
            variant="secondary"
            className="mt-5 w-full"
            onClick={() => {
              window.location.href =
                "/settings";
            }}
          >
            <Building2 size={15} />
            Manage payout account
          </Button>

        </div>

      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-100 p-5">
          <div className="flex items-center gap-3">

            <CreditCard
              size={18}
              className="text-slate-500"
            />

            <span className="font-bold text-slate-950">
              All payments
            </span>

          </div>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[950px] text-left">

            <thead className="bg-slate-50">

              <tr className="text-xs text-slate-400">

                <th className="px-5 py-3 font-medium">
                  Reference
                </th>

                <th className="px-5 py-3 font-medium">
                  Order
                </th>

                <th className="px-5 py-3 font-medium">
                  Customer
                </th>

                <th className="px-5 py-3 font-medium">
                  Amount
                </th>

                <th className="px-5 py-3 font-medium">
                  Fee
                </th>

                <th className="px-5 py-3 font-medium">
                  Merchant
                </th>

                <th className="px-5 py-3 font-medium">
                  Status
                </th>

                <th className="px-5 py-3 font-medium">
                  Date
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-slate-100">

              {loading ? (
                <tr>
                  <td
                    colSpan="8"
                    className="p-12 text-center text-sm text-slate-400"
                  >
                    Loading payments...
                  </td>
                </tr>
              ) : (
                filteredPayments.map(
                  payment => (
                    <tr
                      key={
                        payment._id
                      }
                      className="hover:bg-slate-50"
                    >

                      <td className="px-5 py-4 text-sm font-bold text-slate-900">
                        {payment.reference}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-500">
                        {payment.order
                          ?.orderNumber ||
                          "—"}
                      </td>

                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-slate-900">
                          {payment.customer
                            ?.name ||
                            "—"}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          {payment.customer
                            ?.email ||
                            payment.customer
                              ?.phone ||
                            ""}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                        {formatMoney(
                          payment.amount
                        )}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-500">
                        {formatMoney(
                          payment.platformFee
                        )}
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                        {formatMoney(
                          payment.merchantAmount
                        )}
                      </td>

                      <td className="px-5 py-4">

                        <Badge
                          type={paymentBadge(
                            payment.status
                          )}
                        >
                          {payment.status}
                        </Badge>

                      </td>

                      <td className="px-5 py-4 text-xs text-slate-400">
                        {payment.createdAt
                          ? new Date(
                              payment.createdAt
                            ).toLocaleDateString()
                          : "—"}
                      </td>

                    </tr>
                  )
                )
              )}

              {!loading &&
                filteredPayments.length ===
                  0 && (
                  <tr>
                    <td
                      colSpan="8"
                      className="p-12 text-center text-sm text-slate-400"
                    >
                      No payments found.
                    </td>
                  </tr>
                )}

            </tbody>

          </table>

        </div>

      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-100 p-5">

          <div className="flex items-center gap-3">

            <ArrowDownToLine
              size={18}
              className="text-slate-500"
            />

            <div>
              <p className="font-bold text-slate-950">
                Payout history
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Recent merchant settlements.
              </p>
            </div>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px] text-left">

            <thead className="bg-slate-50">

              <tr className="text-xs text-slate-400">

                <th className="px-5 py-3 font-medium">
                  Reference
                </th>

                <th className="px-5 py-3 font-medium">
                  Amount
                </th>

                <th className="px-5 py-3 font-medium">
                  Status
                </th>

                <th className="px-5 py-3 font-medium">
                  Date
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-slate-100">

              {payouts.map(
                payout => (
                  <tr
                    key={
                      payout._id
                    }
                    className="hover:bg-slate-50"
                  >

                    <td className="px-5 py-4 text-sm font-bold text-slate-900">
                      {
                        payout.reference
                      }
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                      {formatMoney(
                        payout.amount
                      )}
                    </td>

                    <td className="px-5 py-4">

                      <Badge
                        type={
                          payout.status ===
                          "success"
                            ? "success"
                            : payout.status ===
                              "failed"
                            ? "danger"
                            : "warning"
                        }
                      >
                        {
                          payout.status
                        }
                      </Badge>

                    </td>

                    <td className="px-5 py-4 text-xs text-slate-400">
                      {payout.createdAt
                        ? new Date(
                            payout.createdAt
                          ).toLocaleDateString()
                        : "—"}
                    </td>

                  </tr>
                )
              )}

              {payouts.length ===
                0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="p-12 text-center text-sm text-slate-400"
                  >
                    No payouts yet.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}