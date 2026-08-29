
import {
  ShieldCheck,
  ArrowRight,
  Bot,
  Boxes,
  Check,
  ChevronDown,
  CreditCard,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Package,
  Play,
  Settings2,
  ShoppingBag,
  Sparkles,
  Users,
  Wallet,
  X,
  Zap
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: Bot,
      title: "AI-powered operations",
      text: "Let AI understand customer requests and turn conversations into business actions."
    },
    {
      icon: MessageCircle,
      title: "WhatsApp automation",
      text: "Connect your WhatsApp Business and respond to customers automatically, 24/7."
    },
    {
      icon: ShoppingBag,
      title: "Orders & inventory",
      text: "Keep conversations, inventory and orders connected in one workspace."
    }
  ];

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Customer messages",
      text: "A customer asks a question or wants to place an order."
    },
    {
      number: "02",
      icon: Bot,
      title: "FlowPilot responds",
      text: "AI understands the request and checks your business information."
    },
    {
      number: "03",
      icon: Package,
      title: "Action completed",
      text: "Orders are captured and activity appears in your workspace."
    }
  ];

  const faqs = [
    {
      q: "What is FlowPilot?",
      a: "FlowPilot is an AI-powered business automation platform that connects customer conversations, inventory, orders and payments."
    },
    {
      q: "Does it work with WhatsApp?",
      a: "Yes. FlowPilot is designed to connect with your WhatsApp Business channel and automate customer conversations."
    },
    {
      q: "Can it create orders?",
      a: "Yes. When a customer confirms an order, FlowPilot can turn the conversation into a structured order."
    },
    {
      q: "Do I stay in control?",
      a: "Absolutely. FlowPilot automates repetitive work while giving you visibility over your customers, orders and business activity."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-950">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Zap size={17} />
            </div>

            <span className="text-lg font-bold tracking-tight">
              FlowPilot
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-500 md:flex">
            <a href="#features" className="transition hover:text-slate-950">
              Features
            </a>

            <a href="#how-it-works" className="transition hover:text-slate-950">
              How it works
            </a>

            <a href="#whatsapp" className="transition hover:text-slate-950">
              WhatsApp
            </a>

            <a href="#faq" className="transition hover:text-slate-950">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Link
              to="/login"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="group flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Get started
              <ArrowRight
                size={14}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 sm:hidden"
          >
            {mobileMenu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 sm:hidden">
            <div className="space-y-1">
              {[
                ["Features", "#features"],
                ["How it works", "#how-it-works"],
                ["WhatsApp", "#whatsapp"],
                ["FAQ", "#faq"]
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/login"
                className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold"
              >
                Sign in
              </Link>

              <Link
                to="/register"
                className="rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get started
              </Link>
            </div>
          </div>
        )}
      </header>


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-[-220px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-slate-100 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 text-white">
                <Sparkles size={10} />
              </span>

              AI-powered business automation

              <ArrowRight size={12} />
            </div>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]">
              Your business.
              <br />
              <span className="text-slate-400">
                On autopilot.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              FlowPilot connects your WhatsApp, AI, inventory and orders
              so customer conversations can become completed business actions.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                to="/register"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-1 hover:bg-slate-800 sm:w-auto"
              >
                Start for free
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#how-it-works"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
              >
                <Play size={14} />
                See how it works
              </a>

            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check size={12} />
                Easy setup
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={12} />
                AI-powered
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={12} />
                Built for businesses
              </span>
            </div>
          </div>


          {/* DASHBOARD PREVIEW */}
          <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20">

            <div className="absolute -left-5 top-16 z-20 hidden w-48 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/30 xl:block">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <MessageCircle size={15} />
                </div>

                <div>
                  <p className="text-xs font-bold">New message</p>
                  <p className="text-[10px] text-slate-400">
                    WhatsApp
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[10px] leading-5 text-slate-500">
                “Is the black hoodie available?”
              </p>
            </div>


            <div className="absolute -right-5 bottom-16 z-20 hidden w-48 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/30 xl:block">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100">
                  <Check size={15} />
                </div>

                <div>
                  <p className="text-xs font-bold">
                    Order created
                  </p>

                  <p className="text-[10px] text-slate-400">
                    #FP-10482
                  </p>
                </div>
              </div>

              <div className="mt-3 flex justify-between text-[10px]">
                <span className="text-slate-400">
                  Total
                </span>

                <span className="font-bold">
                  ₦52,000
                </span>
              </div>
            </div>


            <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-2 shadow-[0_40px_100px_-30px_rgba(15,23,42,0.45)]">

              <div className="overflow-hidden rounded-[21px] bg-slate-50">

                <div className="flex h-11 items-center gap-2 border-b border-slate-200 bg-white px-5">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />

                  <div className="ml-4 flex h-7 flex-1 items-center rounded-lg bg-slate-100 px-3 text-[9px] text-slate-400">
                    app.flowpilot.com/dashboard
                  </div>
                </div>


                <div className="grid min-h-[400px] lg:grid-cols-[180px_1fr]">

                  {/* SIDEBAR */}
                  <aside className="hidden border-r border-slate-200 bg-white p-5 lg:block">

                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
                        <Zap size={12} />
                      </div>

                      <span className="text-sm font-bold">
                        FlowPilot
                      </span>
                    </div>

                    <div className="mt-7 space-y-1">
                      {[
                        [LayoutDashboard, "Dashboard"],
                        [ShoppingBag, "Orders"],
                        [Users, "Customers"],
                        [Boxes, "Inventory"],
                        [MessageCircle, "WhatsApp"],
                        [Settings2, "Settings"]
                      ].map(([Icon, label], index) => (
                        <div
                          key={label}
                          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[10px] font-medium ${
                            index === 0
                              ? "bg-slate-950 text-white"
                              : "text-slate-500"
                          }`}
                        >
                          <Icon size={12} />
                          {label}
                        </div>
                      ))}
                    </div>
                  </aside>


                  {/* DASHBOARD */}
                  <div className="p-5 sm:p-7">

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-slate-400">
                          Friday, August 28
                        </p>

                        <h3 className="mt-1 text-lg font-bold">
                          Good morning 👋
                        </h3>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[9px] font-semibold">
                        Today
                      </div>
                    </div>


                    <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">

                      {[
                        ["Orders", "128", "+18.4%", ShoppingBag],
                        ["Revenue", "₦842k", "+12.8%", Wallet],
                        ["Customers", "1,284", "+9.2%", Users],
                        ["Automation", "94%", "+6.1%", Bot]
                      ].map(([title, value, growth, Icon]) => (
                        <div
                          key={title}
                          className="rounded-2xl border border-slate-200 bg-white p-4"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                              <Icon size={13} />
                            </div>

                            <span className="text-[8px] font-bold text-slate-400">
                              {growth}
                            </span>
                          </div>

                          <p className="mt-4 text-[9px] text-slate-400">
                            {title}
                          </p>

                          <p className="mt-1 text-lg font-bold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>


                    <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">

                      <div className="rounded-2xl border border-slate-200 bg-white p-5">

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-bold">
                              Recent orders
                            </h4>

                            <p className="mt-1 text-[9px] text-slate-400">
                              Automatically captured
                            </p>
                          </div>

                          <span className="text-[9px] font-semibold text-slate-400">
                            View all
                          </span>
                        </div>

                        <div className="mt-4 space-y-2">
                          {[
                            ["#FP-10482", "Nike Air Max", "₦85,000"],
                            ["#FP-10481", "Classic Hoodie", "₦42,000"],
                            ["#FP-10480", "Premium Set", "₦68,000"]
                          ].map(([id, item, price]) => (
                            <div
                              key={id}
                              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                                  <Package size={12} />
                                </div>

                                <div>
                                  <p className="text-[10px] font-semibold">
                                    {item}
                                  </p>

                                  <p className="text-[8px] text-slate-400">
                                    {id}
                                  </p>
                                </div>
                              </div>

                              <span className="text-[10px] font-bold">
                                {price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>


                      <div className="rounded-2xl bg-slate-950 p-5 text-white">

                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
                            <Bot size={15} />
                          </div>

                          <div>
                            <p className="text-xs font-bold">
                              FlowPilot AI
                            </p>

                            <p className="text-[9px] text-slate-500">
                              Active now
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 space-y-2">
                          <div className="rounded-xl rounded-tl-sm bg-white/10 p-3 text-[9px] leading-4 text-slate-300">
                            Customer asked about a black hoodie.
                          </div>

                          <div className="ml-auto rounded-xl rounded-tr-sm bg-white p-3 text-[9px] leading-4 text-slate-700">
                            8 units available in medium.
                          </div>

                          <div className="rounded-xl rounded-tl-sm bg-white/10 p-3 text-[9px] leading-4 text-slate-300">
                            Customer confirmed. Order created.
                          </div>
                        </div>

                        <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5">
                          <Check size={12} />

                          <span className="text-[9px] font-semibold">
                            Workflow completed
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section id="features" className="scroll-mt-20 border-t border-slate-100">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Everything connected
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              One system for your business.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              Replace repetitive work with intelligent automation
              built around how your business actually operates.
            </p>
          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white transition group-hover:scale-105">
                  <Icon size={18} />
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-slate-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-2xl text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
              <Sparkles size={20} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From message to action.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              FlowPilot handles the repetitive steps between
              a customer request and a completed action.
            </p>
          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {steps.map(
              ({ number, icon: Icon, title, text }) => (
                <div
                  key={number}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-950">
                      <Icon size={17} />
                    </div>

                    <span className="text-xs font-bold text-slate-600">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {text}
                  </p>
                </div>
              )
            )}

          </div>
        </div>
      </section>


      {/* WHATSAPP */}
      <section
        id="whatsapp"
        className="scroll-mt-20 border-b border-slate-100"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <MessageCircle size={20} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              WhatsApp automation
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Your customers message.
              <br />
              <span className="text-slate-400">
                FlowPilot handles the rest.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
              Let customers ask questions, check products,
              confirm orders and get answers without waiting
              for you to respond manually.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Answer customer questions automatically",
                "Check configured inventory",
                "Capture confirmed orders",
                "Keep customer conversations organized"
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                    <Check size={13} />
                  </div>

                  <span className="text-sm font-semibold">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>


          {/* CHAT VISUAL */}
          <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-3 shadow-xl shadow-slate-200/40">

            <div className="rounded-[23px] bg-slate-950 p-6 text-white">

              <div className="flex items-center gap-3 border-b border-white/10 pb-5">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950">
                  <MessageCircle size={17} />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Business WhatsApp
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    FlowPilot connected
                  </p>
                </div>

              </div>


              <div className="space-y-4 py-6">

                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-4">
                  <p className="text-[9px] font-bold text-slate-500">
                    CUSTOMER
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    Hi, is the blue dress available in size 10?
                  </p>
                </div>


                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white p-4 text-slate-950">
                  <p className="text-[9px] font-bold text-slate-400">
                    FLOWPILOT AI
                  </p>

                  <p className="mt-2 text-xs leading-5">
                    Yes. I found 3 units available in size 10.
                    Would you like to place an order?
                  </p>
                </div>


                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-4">
                  <p className="text-[9px] font-bold text-slate-500">
                    CUSTOMER
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    Yes, I'll take one.
                  </p>
                </div>


                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white p-4 text-slate-950">
                  <p className="text-[9px] font-bold text-slate-400">
                    FLOWPILOT AI
                  </p>

                  <p className="mt-2 text-xs leading-5">
                    Perfect. Your order has been prepared.
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
                  <Check size={15} />
                </div>

                <div>
                  <p className="text-xs font-bold">
                    Order workflow completed
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Customer → AI → Inventory → Order
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* AI + PAYMENTS */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div className="rounded-[30px] bg-slate-950 p-7 text-white sm:p-9">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-950">
              <Bot size={18} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Intelligent AI
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              More than a chatbot.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              FlowPilot connects customer intent with your
              actual business data and workflows.
            </p>

            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {[
                "Understand intent",
                "Check inventory",
                "Create orders",
                "Track activity"
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-3"
                >
                  <Check size={13} />
                  <span className="text-xs font-semibold text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>


          <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-7 sm:p-9">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
              <CreditCard size={18} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Payments
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Keep orders and payments connected.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Configure the payment methods your business
              supports and keep them connected to your workflow.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3">

              {[
                [CreditCard, "Paystack"],
                [Wallet, "Bank transfer"],
                [Package, "Cash on delivery"]
              ].map(([Icon, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <Icon size={17} />

                  <p className="mt-4 text-[10px] font-bold">
                    {label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 border-t border-slate-100">

        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-6 lg:py-28">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Questions, answered.
            </h2>

          </div>


          <div className="mt-10 space-y-3">

            {faqs.map(({ q, a }, index) => {

              const open = openFaq === index;

              return (
                <div
                  key={q}
                  className={`overflow-hidden rounded-2xl border bg-white transition ${
                    open
                      ? "border-slate-300 shadow-lg shadow-slate-200/30"
                      : "border-slate-200"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(open ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >

                    <span className="text-sm font-semibold sm:text-base">
                      {q}
                    </span>

                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 transition ${
                        open
                          ? "rotate-180 bg-slate-950 text-white"
                          : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>

                  </button>

                  {open && (
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                      <p className="text-sm leading-7 text-slate-500">
                        {a}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-slate-950 px-6 py-20 text-center text-white shadow-2xl sm:px-12 lg:px-20">

          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950">
              <Zap size={22} />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Let your business run smarter.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
              Automate customer conversations, capture orders
              and keep your operations connected with FlowPilot.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/register"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Create your workspace

                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/login"
                className="flex items-center justify-center rounded-xl border border-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Sign in
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200">

        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Zap size={16} />
              </div>

              <span className="font-bold">
                FlowPilot
              </span>
            </Link>


            <div className="flex flex-wrap gap-5 text-xs text-slate-500">

              <a
                href="#features"
                className="hover:text-slate-950"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="hover:text-slate-950"
              >
                How it works
              </a>

              <a
                href="#whatsapp"
                className="hover:text-slate-950"
              >
                WhatsApp
              </a>

              <a
                href="#faq"
                className="hover:text-slate-950"
              >
                FAQ
              </a>

              <Link
                to="/login"
                className="hover:text-slate-950"
              >
                Sign in
              </Link>

            </div>

          </div>


          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">

            <p>
              © 2026 FlowPilot. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={12} />
                Secure workspace
              </span>

              <span className="flex items-center gap-1.5">
                <Bot size={12} />
                AI-powered
              </span>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}
