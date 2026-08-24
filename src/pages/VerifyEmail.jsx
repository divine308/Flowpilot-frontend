import {
  useEffect,
  useState
} from "react";
import {
  Link,
  useNavigate,
  useSearchParams
} from "react-router-dom";
import {
  ArrowRight,
  Mail,
  RefreshCw,
  Zap
} from "lucide-react";
import Button from "../components/Button";
import { api } from "../services/api";
export default function VerifyEmail() {
  const navigate =
    useNavigate();
  const [
    searchParams
  ] = useSearchParams();
  const email =
    searchParams.get("email") || "";
  const [code, setCode] =
    useState("");
  const [loading, setLoading] =
    useState(false);
  const [resending, setResending] =
    useState(false);
  const [error, setError] =
    useState("");
  const [message, setMessage] =
    useState("");
  const [
    secondsLeft,
    setSecondsLeft
  ] = useState(300);
  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }
    const timer =
      setInterval(() => {
        setSecondsLeft(
          previous =>
            previous > 0
              ? previous - 1
              : 0
        );
      }, 1000);
    return () =>
      clearInterval(timer);
  }, [secondsLeft]);
  function formatTime(seconds) {
    const minutes =
      Math.floor(seconds / 60);
    const remainingSeconds =
      seconds % 60;
    return `${String(minutes).padStart(
      2,
      "0"
    )}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }
  function handleCodeChange(e) {
    const value =
      e.target.value
        .replace(/\D/g, "")
        .slice(0, 6);
    setCode(value);
    setError("");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (code.length !== 6) {
      setError(
        "Enter the 6-digit verification code."
      );
      return;
    }
    if (secondsLeft <= 0) {
      setError(
        "This code has expired. Please request a new one."
      );
      return;
    }
    setLoading(true);
    setError("");
    setMessage("");
    try {
      await api.verifyEmail({
        email,
        code
      });
      navigate("/login", {
        replace: true,
        state: {
          message:
            "Email verified successfully. You can now sign in."
        }
      });
    } catch (error) {
      setError(
        error.message
      );
    } finally {
      setLoading(false);
    }
  }
  async function handleResend() {
    setResending(true);
    setError("");
    setMessage("");
    try {
      await api.resendVerification(
        email
      );
      setCode("");
      setSecondsLeft(300);
      setMessage(
        "A new verification code has been sent to your email."
      );
    } catch (error) {
      setError(
        error.message
      );
    } finally {
      setResending(false);
    }
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6 py-12">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/40 sm:p-12">
          <div className="flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Zap size={21} />
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
              <Mail
                size={24}
                className="text-slate-700"
              />
            </div>
            <p className="mt-6 text-sm font-semibold text-slate-500">
              Verify your email
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Check your inbox
            </h1>
           <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500">
                We sent a 6-digit verification code to
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                If you don't see the email in your inbox, please
                check your <span className="font-semibold text-slate-950">Spam</span> or{" "}
                <span className="font-semibold text-slate-950">Junk</span> folder.
                </p>
            <p className="mt-1 break-all font-semibold text-slate-950">
              {email}
            </p>
          </div>
          {error && (
            <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}
          {message && (
            <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-700">
              {message}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="mt-8"
          >
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Verification code
            </label>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={code}
              onChange={handleCodeChange}
              placeholder="000000"
              className="w-full rounded-xl border border-slate-200 px-4 py-4 text-center text-2xl font-bold tracking-[0.5em] outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-100"
            />
            <div className="mt-4 flex items-center justify-center gap-2 text-sm">
              <span className="text-slate-500">
                Code expires in
              </span>
              <span
                className={
                  secondsLeft === 0
                    ? "font-semibold text-red-600"
                    : "font-semibold text-slate-950"
                }
              >
                {formatTime(
                  secondsLeft
                )}
              </span>
            </div>
            <Button
              type="submit"
              loading={loading}
              disabled={
                code.length !== 6 ||
                secondsLeft === 0
              }
              className="mt-6 w-full py-3"
            >
              Verify email
              <ArrowRight size={16} />
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Didn't receive the code?
            </p>
            <button
              type="button"
              onClick={handleResend}
              disabled={resending}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:underline disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw
                size={15}
                className={
                  resending
                    ? "animate-spin"
                    : ""
                }
              />
              {resending
                ? "Sending..."
                : "Resend code"}
            </button>
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Wrong email?{" "}
            <Link
              to="/register"
              className="font-semibold text-slate-950 hover:underline"
            >
              Create another account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}