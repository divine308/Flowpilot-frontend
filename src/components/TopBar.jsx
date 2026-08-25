import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  Menu,
  Bell,
  Search,
  LogOut,
  Package,
  ShoppingCart,
  Activity,
  CreditCard,
  X,
  Users
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export default function TopBar({
  onMenu,
  user,
  onLogout
}) {
  const navigate = useNavigate();

  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState([]);

  const [searching, setSearching] =
    useState(false);

  const [showResults, setShowResults] =
    useState(false);

  const searchRef =
    useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.key === "/" &&
        document.activeElement?.tagName !==
          "INPUT" &&
        document.activeElement?.tagName !==
          "TEXTAREA"
      ) {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (
        event.key === "Escape"
      ) {
        setShowResults(false);
        searchRef.current?.blur();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const timeout =
      setTimeout(async () => {
        try {
          setSearching(true);

          const data =
            await api.search(
              query.trim()
            );

          setResults(
            data.results || []
          );

          setShowResults(true);
        } catch {
          setResults([]);
        } finally {
          setSearching(false);
        }
      }, 300);

    return () =>
      clearTimeout(timeout);
  }, [query]);

  function handleResultClick(
    result
  ) {
    setQuery("");
    setResults([]);
    setShowResults(false);

    if (result.url) {
      navigate(result.url);
    }
  }

  function getIcon(type) {
    switch (type) {
      case "inventory":
        return Package;

      case "order":
        return ShoppingCart;

      case "activity":
        return Activity;

      case "payment":
        return CreditCard;

      case "customer":
        return Users;

      default:
        return Search;
    }
  }

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={onMenu}
          className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div className="relative hidden md:block">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-slate-300 focus-within:bg-white">
            <Search
              size={15}
              className="shrink-0 text-slate-400"
            />

            <input
              ref={searchRef}
              value={query}
              onChange={event =>
                setQuery(
                  event.target.value
                )
              }
              onFocus={() => {
                if (results.length) {
                  setShowResults(true);
                }
              }}
              placeholder="Search anything..."
              className="w-56 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />

            {query && (
              <button
                onClick={() => {
                  setQuery("");
                  setResults([]);
                  setShowResults(false);
                }}
                className="text-slate-400 hover:text-slate-700"
              >
                <X size={14} />
              </button>
            )}

            {!query && (
              <kbd className="ml-2 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">
                /
              </kbd>
            )}
          </div>

          {showResults && (
            <div className="absolute left-0 top-full z-50 mt-2 w-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              {searching ? (
                <div className="p-5 text-center text-sm text-slate-400">
                  Searching...
                </div>
              ) : results.length === 0 ? (
                <div className="p-8 text-center">
                  <Search
                    size={24}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    No results found
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Try another search term.
                  </p>
                </div>
              ) : (
                <div className="max-h-[420px] overflow-y-auto">
                  <div className="border-b border-slate-100 px-4 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Search results
                    </p>
                  </div>

                  {results.map(
                    (result, index) => {
                      const Icon =
                        getIcon(
                          result.type
                        );

                      return (
                        <button
                          key={
                            result.id ||
                            index
                          }
                          onClick={() =>
                            handleResultClick(
                              result
                            )
                          }
                          className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-slate-50"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                            <Icon
                              size={16}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-slate-900">
                              {
                                result.title
                              }
                            </p>

                            <p className="truncate text-xs text-slate-400">
                              {
                                result.description
                              }
                            </p>
                          </div>

                          <span className="text-[10px] capitalize text-slate-400">
                            {
                              result.type
                            }
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100">
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        <div className="h-7 w-px bg-slate-200" />

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-900">
              {user?.name ||
                "Operator"}
            </p>

            <p className="text-xs capitalize text-slate-400">
              {user?.role ||
                "operator"}
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
            {user?.name
              ?.charAt(0)
              ?.toUpperCase() ||
              "O"}
          </div>

          <button
            onClick={onLogout}
            className="hidden rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 sm:block"
            title="Logout"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}