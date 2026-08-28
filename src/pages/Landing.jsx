
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  CreditCard,
  Globe2,
  Headphones,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Package,
  Play,
  RefreshCw,
  Send,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  X,
  Zap
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const features = [
    {
      icon: Bot,
      title: "AI Operations",
      description:
        "Give your business an intelligent operational layer that understands requests, follows your rules and turns conversations into actions.",
      tag: "Intelligence"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Automation",
      description:
        "Connect your WhatsApp Business account and let FlowPilot handle repetitive customer conversations around the clock.",
      tag: "Communication"
    },
    {
      icon: Package,
      title: "Smart Orders",
      description:
        "Turn confirmed conversations into structured orders with customers, products, quantities, totals and payment status.",
      tag: "Orders"
    },
    {
      icon: Boxes,
      title: "Inventory Awareness",
      description:
        "FlowPilot works with the product and inventory information you provide so customers get answers based on your actual stock.",
      tag: "Inventory"
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description:
        "Configure Paystack, bank transfer or cash on delivery and keep payment information connected to your order workflow.",
      tag: "Payments"
    },
    {
      icon: LayoutDashboard,
      title: "Unified Workspace",
      description:
        "See conversations, orders, inventory, customers and operational activity from one clean dashboard.",
      tag: "Workspace"
    }
  ];

  const faqs = [
    {
      question: "What is FlowPilot?",
      answer:
        "FlowPilot is an AI-powered business operations platform. It connects customer communication, inventory, orders, payments and business workflows so repetitive operational work can happen automatically."
    },
    {
      question: "Does FlowPilot work with WhatsApp?",
      answer:
        "Yes. FlowPilot is designed to connect with your business WhatsApp channel so customers can ask questions, discover products, check availability and initiate orders through normal conversations."
    },
    {
      question: "Can FlowPilot actually create orders?",
      answer:
        "Yes. When a customer confirms an order through a connected workflow, FlowPilot can structure the order with the relevant customer, product, quantity, total and payment information."
    },
    {
      question: "Does FlowPilot know what is in my inventory?",
      answer:
        "FlowPilot can use the product and inventory information you provide. This allows automated conversations to be based on your configured business data instead of generic responses."
    },
    {
      question: "Will I still be able to control my business?",
      answer:
        "Absolutely. Automation is designed to reduce repetitive work, not remove you from the business. You retain visibility through the FlowPilot workspace and can monitor important activity."
    },
    {
      question: "What payment methods can I configure?",
      answer:
        "You can configure supported options such as Paystack, bank transfer and cash on delivery, depending on how your business operates."
    }
  ];

  const useCases = [
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description:
        "Answer product questions, capture orders and keep customer conversations organized."
    },
    {
      icon: Store,
      title: "Fashion Brands",
      description:
        "Handle questions about sizes, colors, availability, prices and orders."
    },
    {
      icon: Truck,
      title: "Delivery Businesses",
      description:
        "Organize requests, customer details and operational workflows."
    },
    {
      icon: Headphones,
      title: "Service Businesses",
      description:
        "Automate repetitive customer support and administrative conversations."
    }
  ];

  const workflow = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Customer messages",
      description:
        "A customer sends a normal WhatsApp message.",
      example: "Do you have the black hoodie in medium?"
    },
    {
      number: "02",
      icon: Bot,
      title: "AI understands",
      description:
        "FlowPilot understands what the customer is asking for.",
      example: "Intent detected: Product availability"
    },
    {
      number: "03",
      icon: Boxes,
      title: "Business data checked",
      description:
        "The AI works with your configured products and inventory.",
      example: "Black Hoodie · Medium · 8 available"
    },
    {
      number: "04",
      icon: ShoppingBag,
      title: "Order created",
      description:
        "Once confirmed, the conversation becomes a structured order.",
      example: "Order #FP-10482 · ₦52,000"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-950">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-950/10 transition duration-300 group-hover:rotate-3 group-hover:scale-105">
              <Zap size={18} />
            </div>

            <span className="text-lg font-bold tracking-tight">
              FlowPilot
            </span>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 lg:flex">

            <a
              href="#features"
              className="transition hover:text-slate-950"
            >
              Features
            </a>

            <a
              href="#workflow"
              className="transition hover:text-slate-950"
            >
              How it works
            </a>

            <a
              href="#whatsapp"
              className="transition hover:text-slate-950"
            >
              WhatsApp
            </a>

            <a
              href="#use-cases"
              className="transition hover:text-slate-950"
            >
              Use cases
            </a>

            <a
              href="#faq"
              className="transition hover:text-slate-950"
            >
              FAQ
            </a>

          </nav>

          {/* DESKTOP ACTIONS */}

          <div className="hidden items-center gap-2 sm:flex">

            <Link
              to="/login"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="group flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Get started

              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 sm:hidden"
          >
            {mobileMenu ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>

        </div>

        {/* MOBILE NAV */}

        {mobileMenu && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 sm:hidden">

            <div className="space-y-1">

              {[
                ["Features", "#features"],
                ["How it works", "#workflow"],
                ["WhatsApp", "#whatsapp"],
                ["Use cases", "#use-cases"],
                ["FAQ", "#faq"]
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-950"
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


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-[-250px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-slate-100 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">

          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 text-white">
                <Sparkles size={10} />
              </span>

              AI-powered business operations

              <ChevronRight size={13} />

            </div>

            {/* Heading */}

            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]">

              Your business.

              <br />

              <span className="text-slate-400">
                On autopilot.
              </span>

            </h1>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8 lg:text-xl">

              FlowPilot connects your WhatsApp, AI, inventory,
              orders and payments so customer conversations
              can become completed business actions.

            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                to="/register"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition duration-300 hover:-translate-y-1 hover:bg-slate-800 sm:w-auto"
              >
                Create your workspace

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />

              </Link>

              <a
                href="#workflow"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
              >
                <Play size={15} />

                See how it works
              </a>

            </div>

            {/* Trust */}

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">

              <span className="flex items-center gap-1.5">
                <Check size={13} />
                Easy setup
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={13} />
                AI-powered
              </span>

              <span className="flex items-center gap-1.5">
                <Check size={13} />
                Built for businesses
              </span>

            </div>

          </div>


          {/* =====================================================
              HERO PRODUCT VISUAL
          ===================================================== */}

          <div className="relative mx-auto mt-20 max-w-6xl">

            {/* Floating card */}

           <div className="absolute left-0 top-16 z-20 hidden w-52 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/30 xl:block">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <MessageCircle size={16} />
                </div>

                <div>
                  <p className="text-xs font-bold">
                    New message
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    WhatsApp
                  </p>
                </div>

              </div>

              <p className="mt-3 text-[10px] leading-5 text-slate-500">
                “Is the black hoodie available in medium?”
              </p>

            </div>


            {/* Floating card */}

            <div className="absolute right-0 bottom-16 z-20 hidden w-52 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/30 xl:block">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100">
                  <Check size={16} />
                </div>

                <div>
                  <p className="text-xs font-bold">
                    Order created
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    #FP-10482
                  </p>
                </div>

              </div>

              <div className="mt-3 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">
                  Total
                </span>

                <span className="font-bold">
                  ₦52,000
                </span>
              </div>

            </div>


            {/* Browser */}

            <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-2 shadow-[0_40px_100px_-30px_rgba(15,23,42,0.45)]">

              <div className="overflow-hidden rounded-[21px] bg-slate-50">

                {/* Browser top */}

                <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-white px-5">

                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />

                  <div className="ml-4 flex h-7 flex-1 items-center rounded-lg bg-slate-100 px-3 text-[10px] text-slate-400">
                    app.flowpilot.com/dashboard
                  </div>

                </div>


                <div className="grid min-h-[480px] lg:grid-cols-[190px_1fr]">

                  {/* Sidebar */}

                  <aside className="hidden border-r border-slate-200 bg-white p-5 lg:block">

                    <div className="flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white">
                        <Zap size={13} />
                      </div>

                      <span className="text-sm font-bold">
                        FlowPilot
                      </span>

                    </div>

                    <div className="mt-8 space-y-1">

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
                          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[11px] font-medium ${
                            index === 0
                              ? "bg-slate-950 text-white"
                              : "text-slate-500"
                          }`}
                        >
                          <Icon size={13} />
                          {label}
                        </div>

                      ))}

                    </div>

                  </aside>


                  {/* Main dashboard */}

                  <div className="p-5 sm:p-7">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-[10px] text-slate-400">
                          Friday, August 28
                        </p>

                        <h3 className="mt-1 text-lg font-bold sm:text-xl">
                          Good morning 👋
                        </h3>

                      </div>

                      <div className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-[10px] font-semibold sm:block">
                        Today
                      </div>

                    </div>


                    {/* Stats */}

                    <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">

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
                              <Icon size={14} />
                            </div>

                            <span className="text-[9px] font-bold text-slate-400">
                              {growth}
                            </span>

                          </div>

                          <p className="mt-5 text-[10px] text-slate-400">
                            {title}
                          </p>

                          <p className="mt-1 text-lg font-bold">
                            {value}
                          </p>

                        </div>

                      ))}

                    </div>


                    {/* Lower dashboard */}

                    <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_1fr]">

                      {/* Orders */}

                      <div className="rounded-2xl border border-slate-200 bg-white p-5">

                        <div className="flex items-center justify-between">

                          <div>
                            <h4 className="text-xs font-bold">
                              Recent orders
                            </h4>

                            <p className="mt-1 text-[9px] text-slate-400">
                              Automatically captured activity
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
                            ["#FP-10480", "Premium Set", "₦68,000"],
                            ["#FP-10479", "Leather Bag", "₦55,000"]
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


                      {/* AI */}

                      <div className="rounded-2xl bg-slate-950 p-5 text-white">

                        <div className="flex items-center gap-3">

                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
                            <Bot size={16} />
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

                        <div className="mt-5 space-y-2.5">

                          <div className="rounded-xl rounded-tl-sm bg-white/10 p-3 text-[9px] leading-4 text-slate-300">
                            Customer asked about black hoodie in medium.
                          </div>

                          <div className="ml-auto rounded-xl rounded-tr-sm bg-white p-3 text-[9px] leading-4 text-slate-700">
                            Checked inventory. 8 units available.
                          </div>

                          <div className="rounded-xl rounded-tl-sm bg-white/10 p-3 text-[9px] leading-4 text-slate-300">
                            Customer confirmed. Creating order.
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


      {/* =========================================================
          TRUST STRIP
      ========================================================= */}

      <section className="border-y border-slate-100 bg-slate-50">

        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

          {[
            ["24/7", "Automated availability"],
            ["1", "Unified workspace"],
            ["AI", "Intelligent workflows"],
            ["∞", "Built to scale"]
          ].map(([value, label]) => (

            <div
              key={label}
              className="px-6 py-9 text-center"
            >

              <p className="text-3xl font-bold tracking-tight">
                {value}
              </p>

              <p className="mt-2 text-xs font-medium text-slate-400">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          PROBLEM / SOLUTION
      ========================================================= */}

      <section className="relative">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                The problem
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Your customers shouldn't have to wait for you to do everything manually.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                Every “Do you have this?”, every availability
                question, every order confirmation and every
                payment follow-up takes time.
              </p>

            </div>


            <div className="grid gap-3">

              {[
                ["Customer sends a message", MessageCircle],
                ["You check your inventory", Boxes],
                ["You reply manually", Send],
                ["Customer confirms", Check],
                ["You create the order", ShoppingBag]
              ].map(([text, Icon], index) => (

                <div
                  key={text}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-x-1 hover:shadow-lg hover:shadow-slate-200/40"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition group-hover:bg-slate-950 group-hover:text-white">
                    <Icon size={17} />
                  </div>

                  <p className="text-sm font-semibold">
                    {text}
                  </p>

                  <span className="ml-auto text-xs font-bold text-slate-300">
                    0{index + 1}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WORKFLOW
      ========================================================= */}

      <section
        id="workflow"
        className="scroll-mt-20 overflow-hidden bg-slate-950 text-white"
      >

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
              <Sparkles size={21} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From a simple message
              <br />
              to a completed workflow.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              FlowPilot connects the dots between what your
              customer asks for and what your business needs
              to do next.
            </p>

          </div>


          <div className="relative mt-16">

            {/* Connecting line */}

            <div className="absolute left-[12.5%] right-[12.5%] top-16 hidden h-px bg-white/10 lg:block" />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {workflow.map(
                ({
                  number,
                  icon: Icon,
                  title,
                  description,
                  example
                }) => (

                  <div
                    key={number}
                    className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
                  >

                    <div className="relative z-10 flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                        <Icon size={19} />
                      </div>

                      <span className="text-xs font-bold text-slate-600">
                        {number}
                      </span>

                    </div>

                    <h3 className="mt-7 text-lg font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                        Example
                      </p>

                      <p className="mt-2 text-xs leading-5 text-slate-300">
                        {example}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section
        id="features"
        className="scroll-mt-20"
      >

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Everything connected
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                One operational system.
                <br />
                Less manual work.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              FlowPilot brings the repetitive parts of running
              your business into one intelligent workspace.
            </p>

          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {features.map(
              ({
                icon: Icon,
                title,
                description,
                tag
              }) => (

                <div
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/40"
                >

                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-slate-100 blur-2xl transition group-hover:bg-slate-200" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:scale-105">
                        <Icon size={20} />
                      </div>

                      <span className="rounded-full bg-slate-50 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        {tag}
                      </span>

                    </div>

                    <h3 className="mt-7 text-lg font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold">
                      Learn more
                      <ArrowRight
                        size={13}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =========================================================
          WHATSAPP
      ========================================================= */}

      <section
        id="whatsapp"
        className="scroll-mt-20 border-y border-slate-100 bg-slate-50"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">

          {/* Conversation visual */}

          <div className="order-2 lg:order-1">

            <div className="relative rounded-[32px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/50">

              <div className="rounded-[24px] bg-slate-950 p-5 text-white sm:p-7">

                {/* WhatsApp header */}

                <div className="flex items-center gap-3 border-b border-white/10 pb-5">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950">
                    <MessageCircle size={19} />
                  </div>

                  <div>

                    <p className="text-sm font-bold">
                      Business WhatsApp
                    </p>

                    <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      FlowPilot connected
                    </p>

                  </div>

                </div>


                {/* Chat */}

                <div className="space-y-4 py-7">

                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-4">

                    <p className="text-[10px] font-semibold text-slate-500">
                      CUSTOMER
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-300">
                      Hi, is the blue dress available in size 10?
                    </p>

                  </div>


                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white p-4 text-slate-950">

                    <p className="text-[10px] font-semibold text-slate-400">
                      FLOWPILOT AI
                    </p>

                    <p className="mt-2 text-xs leading-5">
                      Yes. I found 3 units available in size 10. Would you like to place an order?
                    </p>

                  </div>


                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-4">

                    <p className="text-[10px] font-semibold text-slate-500">
                      CUSTOMER
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-300">
                      Yes, I'll take one.
                    </p>

                  </div>


                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white p-4 text-slate-950">

                    <p className="text-[10px] font-semibold text-slate-400">
                      FLOWPILOT AI
                    </p>

                    <p className="mt-2 text-xs leading-5">
                      Perfect. I've prepared your order for confirmation.
                    </p>

                  </div>

                </div>


                {/* Workflow result */}

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
                      <Check size={16} />
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center justify-between">

                        <p className="text-xs font-bold">
                          Order workflow
                        </p>

                        <span className="text-[9px] text-slate-500">
                          Completed
                        </span>

                      </div>

                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-full rounded-full bg-white" />
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Text */}

          <div className="order-1 lg:order-2">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <MessageCircle size={21} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              WhatsApp commerce
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Meet customers where they already are.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Your customers don't want to fill out complicated
              forms just to ask if something is available.
              Let conversations become the interface.
            </p>


            <div className="mt-9 space-y-5">

              {[
                [
                  "Answer questions",
                  "Automatically respond to repetitive product and business questions."
                ],
                [
                  "Check availability",
                  "Use your configured inventory information during conversations."
                ],
                [
                  "Collect orders",
                  "Turn confirmed conversations into structured orders."
                ],
                [
                  "Keep context",
                  "Keep useful customer and order information organized."
                ]
              ].map(([title, text]) => (

                <div
                  key={title}
                  className="flex gap-4"
                >

                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200">
                    <Check size={13} />
                  </div>

                  <div>

                    <p className="text-sm font-bold">
                      {title}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          AI SECTION
      ========================================================= */}

      <section className="overflow-hidden bg-slate-950 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">

          <div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
              <Bot size={21} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Intelligent automation
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Not just a chatbot.
              <br />
              An operational AI.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              FlowPilot is designed to understand the context
              around a request and connect that request to your
              business information and workflows.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">

              {[
                "Understand intent",
                "Use business information",
                "Check inventory",
                "Create orders",
                "Track activity",
                "Keep you in control"
              ].map(item => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                >

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <Check size={12} />
                  </div>

                  <span className="text-xs font-semibold text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* AI visual */}

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-7">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
                    <Bot size={17} />
                  </div>

                  <div>

                    <p className="text-sm font-bold">
                      FlowPilot AI
                    </p>

                    <p className="text-[10px] text-slate-500">
                      Operational reasoning
                    </p>

                  </div>

                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] text-slate-500">
                  ACTIVE
                </span>

              </div>


              <div className="space-y-4 py-6">

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">

                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-600">
                    Incoming request
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    “I need one black hoodie in medium.”
                  </p>

                </div>


                <div className="flex justify-center">
                  <ArrowDown size={17} className="text-slate-600" />
                </div>


                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <Boxes size={14} />
                    </div>

                    <div>

                      <p className="text-xs font-bold">
                        Inventory lookup
                      </p>

                      <p className="mt-1 text-[10px] text-slate-500">
                        Black Hoodie · Medium
                      </p>

                    </div>

                    <Check
                      size={15}
                      className="ml-auto"
                    />

                  </div>

                </div>


                <div className="flex justify-center">
                  <ArrowDown size={17} className="text-slate-600" />
                </div>


                <div className="rounded-2xl border border-white/10 bg-white p-4 text-slate-950">

                  <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                      <ShoppingBag size={14} />
                    </div>

                    <div>

                      <p className="text-xs font-bold">
                        Order prepared
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        #FP-10482 · ₦52,000
                      </p>

                    </div>

                    <Check
                      size={15}
                      className="ml-auto"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BEFORE / AFTER
      ========================================================= */}

      <section>

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              The difference
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Stop doing work that software can do.
            </h2>

          </div>


          <div className="mt-14 grid gap-5 lg:grid-cols-2">

            {/* Before */}

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <Clock3 size={17} />
                </div>

                <div>

                  <p className="text-sm font-bold">
                    Without FlowPilot
                  </p>

                  <p className="text-xs text-slate-400">
                    Manual operations
                  </p>

                </div>

              </div>

              <div className="mt-7 space-y-3">

                {[
                  "Customer messages you",
                  "You manually check inventory",
                  "You type a response",
                  "Customer asks another question",
                  "You create the order",
                  "You update your records"
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3"
                  >

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[9px] font-bold text-slate-400">
                      {index + 1}
                    </span>

                    <span className="text-xs font-medium text-slate-600">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* After */}

            <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-8">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
                  <Zap size={17} />
                </div>

                <div>

                  <p className="text-sm font-bold">
                    With FlowPilot
                  </p>

                  <p className="text-xs text-slate-500">
                    Intelligent automation
                  </p>

                </div>

              </div>

              <div className="mt-7 space-y-3">

                {[
                  "Customer sends a message",
                  "AI understands the request",
                  "Inventory is checked",
                  "Customer gets an answer",
                  "Order is structured",
                  "You see the activity"
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"
                  >

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[9px] font-bold text-slate-950">
                      <Check size={11} />
                    </span>

                    <span className="text-xs font-medium text-slate-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          USE CASES
      ========================================================= */}

      <section
        id="use-cases"
        className="scroll-mt-20 bg-slate-50"
      >

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Built for modern businesses
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                One platform.
                <br />
                Many possibilities.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Whether you sell products or provide services,
              FlowPilot can become the operational layer behind
              your customer experience.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {useCases.map(
              ({
                icon: Icon,
                title,
                description
              }) => (

                <div
                  key={title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white transition group-hover:scale-105">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-7 text-lg font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {description}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =========================================================
          PAYMENTS
      ========================================================= */}

      <section>

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">

          <div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <CreditCard size={21} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Payments
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Keep payment and orders connected.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Configure the payment methods your business
              supports and keep them connected to the
              operational workflow.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">

              {[
                [CreditCard, "Paystack"],
                [Wallet, "Bank transfer"],
                [Package, "Cash on delivery"]
              ].map(([Icon, label]) => (

                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-slate-300 hover:shadow-lg"
                >

                  <Icon size={18} />

                  <p className="mt-4 text-xs font-bold">
                    {label}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* Payment card */}

          <div className="rounded-[32px] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/40 sm:p-7">

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs text-slate-500">
                    Order total
                  </p>

                  <p className="mt-1 text-3xl font-bold">
                    ₦142,000
                  </p>

                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-950">
                  <CreditCard size={18} />
                </div>

              </div>


              <div className="my-7 h-px bg-white/10" />


              <div className="space-y-4">

                {[
                  ["Classic Hoodie", "₦52,000"],
                  ["Premium Trousers", "₦65,000"],
                  ["Delivery", "₦25,000"]
                ].map(([item, price]) => (

                  <div
                    key={item}
                    className="flex justify-between text-xs"
                  >

                    <span className="text-slate-400">
                      {item}
                    </span>

                    <span className="font-semibold">
                      {price}
                    </span>

                  </div>

                ))}

              </div>


              <div className="mt-7 rounded-2xl bg-white p-4 text-slate-950">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                    <Check size={15} />
                  </div>

                  <div>

                    <p className="text-xs font-bold">
                      Payment configured
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Ready for customer checkout
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OPERATIONS
      ========================================================= */}

      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Built for operations
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Less admin.
              <br />
              More business.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Your business should not depend on you answering
              the same questions and performing the same tasks
              all day.
            </p>

          </div>


          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [Clock3, "Save time", "Reduce repetitive customer and administrative work."],
              [RefreshCw, "Automate workflows", "Let routine actions happen with less intervention."],
              [ShieldCheck, "Stay in control", "Keep visibility over important business activity."],
              [Globe2, "Work anywhere", "Access your operational workspace from anywhere."]
            ].map(([Icon, title, text]) => (

              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Icon size={17} />
                </div>

                <h3 className="mt-6 text-base font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}

      <section
        id="faq"
        className="scroll-mt-20"
      >

        <div className="mx-auto max-w-4xl px-5 py-24 sm:px-6 lg:py-32">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Questions, answered.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Everything you need to know before bringing
              FlowPilot into your business.
            </p>

          </div>


          <div className="mt-14 space-y-3">

            {faqs.map(
              ({
                question,
                answer
              }, index) => {

                const isOpen =
                  openFaq === index;

                return (

                  <div
                    key={question}
                    className={`overflow-hidden rounded-2xl border bg-white transition ${
                      isOpen
                        ? "border-slate-300 shadow-lg shadow-slate-200/30"
                        : "border-slate-200"
                    }`}
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(
                          isOpen
                            ? null
                            : index
                        )
                      }
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    >

                      <span className="text-sm font-semibold sm:text-base">
                        {question}
                      </span>

                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 transition ${
                        isOpen
                          ? "rotate-180 bg-slate-950 text-white"
                          : ""
                      }`}>

                        <ChevronDown size={14} />

                      </div>

                    </button>


                    {isOpen && (

                      <div className="border-t border-slate-100 px-6 pb-6 pt-4">

                        <p className="max-w-3xl text-sm leading-7 text-slate-500">
                          {answer}
                        </p>

                      </div>

                    )}

                  </div>

                );
              }
            )}

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-slate-950 px-6 py-20 text-center text-white shadow-2xl shadow-slate-300/50 sm:px-12 lg:px-20">

          {/* Glow */}

          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950">
              <Zap size={23} />
            </div>

            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              Your business has enough manual work already.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Connect your business to an intelligent operational
              layer and spend more time growing instead of
              repeating the same tasks.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/register"
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Create your workspace

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />

              </Link>

              <a
                href="#workflow"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                <Play size={15} />
                See how it works
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-slate-200">

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

          <div className="grid gap-12 md:grid-cols-4">

            <div className="md:col-span-2">

              <Link
                to="/"
                className="flex items-center gap-3"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Zap size={18} />
                </div>

                <span className="font-bold">
                  FlowPilot
                </span>

              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                An intelligent operational layer for modern
                businesses. Connect AI, customers, orders,
                inventory and payments.
              </p>

            </div>


            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Product
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-500">

                <a
                  href="#features"
                  className="block transition hover:text-slate-950"
                >
                  Features
                </a>

                <a
                  href="#workflow"
                  className="block transition hover:text-slate-950"
                >
                  How it works
                </a>

                <a
                  href="#whatsapp"
                  className="block transition hover:text-slate-950"
                >
                  WhatsApp
                </a>

                <a
                  href="#use-cases"
                  className="block transition hover:text-slate-950"
                >
                  Use cases
                </a>

              </div>

            </div>


            <div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Account
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-500">

                <Link
                  to="/login"
                  className="block transition hover:text-slate-950"
                >
                  Sign in
                </Link>

                <Link
                  to="/register"
                  className="block transition hover:text-slate-950"
                >
                  Create account
                </Link>

                <a
                  href="#faq"
                  className="block transition hover:text-slate-950"
                >
                  FAQ
                </a>

              </div>

            </div>

          </div>


          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-slate-100 pt-7 text-xs text-slate-400 sm:flex-row">

            <p>
              © 2026 FlowPilot. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">

              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} />
                Secure workspace
              </span>

              <span className="flex items-center gap-1.5">
                <Bot size={13} />
                AI-powered
              </span>

              <span className="flex items-center gap-1.5">
                <Zap size={13} />
                Built for scale
              </span>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

