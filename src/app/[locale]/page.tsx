"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Menu, X } from "lucide-react";

import en from "../../messages/en.json";
import uz from "../../messages/uz.json";
import ru from "../../messages/ru.json";

// --- Locale tiplari ---
type Locale = "en" | "uz" | "ru";

// --- JSON faylining tipini aniqlash ---
interface Dictionary {
  logo: string;
  nav: {
    home: string;
    services: string;
    pricing: string;
    contact: string;
  };
  menu: string;
  start: string;
  hero: {
    title: string;
    desc: string;
    cta: string;
  };
  features: {
    title: string;
    onlineBanking: string;
    onlineBankingDesc: string;
    budgeting: string;
    budgetingDesc: string;
    transfer: string;
    transferDesc: string;
    api: string;
    apiDesc: string;
  };
  brief: {
    title: string;
    desc: string;
    points: string[];
  };
  resources: {
    title: string;
    items: string[];
  };
  ideas: {
    title: string;
    points: string[];
  };
  faq: {
    title: string;
    questions: string[];
    answer: string;
  };
  footer: string;
}

// --- dictionaries ---
const dictionaries: Record<Locale, Dictionary> = { en, uz, ru };

export default function Page() {
  const params = useParams();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // locale aniqlash
  let localeStr: string;
  if (Array.isArray(params?.locale)) {
    localeStr = params.locale[0];
  } else {
    localeStr = params?.locale || "uz";
  }
  const locale: Locale =
    localeStr in dictionaries ? (localeStr as Locale) : "uz";
  const dict = dictionaries[locale];

  const navLinks = [
    { title: dict.nav.home, path: "/" },
    { title: dict.nav.services, path: "/xizmatlar" },
    { title: dict.nav.pricing, path: "/narxlar" },
    { title: dict.nav.contact, path: "/boglanish" },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HEADER */}
      <header className="flex justify-between items-center px-4 py-4 shadow relative">
        {/* LEFT: Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* CENTER: Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-green-600">
          {dict.logo}
        </h1>

        {/* RIGHT: Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition ${
                  pathname === link.path
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Language switcher */}
          <div className="flex">
            {[
              { code: "uz", path: "/" },
              { code: "ru", path: "/ru" },
              { code: "en", path: "/en" },
            ].map((lang) => (
              <Link
                key={lang.code}
                href={lang.path}
                className={`px-3 py-1 rounded-md mx-1 transition text-sm ${
                  pathname === lang.path
                    ? "bg-white text-black shadow font-semibold"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {lang.code.toUpperCase()}
              </Link>
            ))}
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            {dict.start}
          </button>
        </div>
      </header>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-lg font-bold text-green-600">{dict.menu}</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 p-1"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition ${
                pathname === link.path
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 hover:text-green-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg">
            {dict.start}
          </button>
        </nav>
      </div>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-8 px-8 py-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {dict.hero.title}
          </h2>
          <p className="mt-6 text-lg text-gray-600">{dict.hero.desc}</p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
            {dict.hero.cta}
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/img/telefon.webp"
            alt="Telefon rasmi"
            width={400}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-8 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-12">
          {dict.features.title}
        </h3>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="font-semibold text-lg mb-2">
              {dict.features.onlineBanking}
            </h4>
            <p className="text-gray-600">{dict.features.onlineBankingDesc}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              {dict.features.budgeting}
            </h4>
            <p className="text-gray-600">{dict.features.budgetingDesc}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              {dict.features.transfer}
            </h4>
            <p className="text-gray-600">{dict.features.transferDesc}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">
              {dict.features.api}
            </h4>
            <p className="text-gray-600">{dict.features.apiDesc}</p>
          </div>
        </div>
      </section>

      {/* BRIEF & RESOURCES */}
      <section className="px-8 py-16 grid md:grid-cols-2 gap-12">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">{dict.brief.title}</h3>
          <p className="text-gray-700 mb-2">{dict.brief.desc}</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {dict.brief.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">{dict.resources.title}</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            {dict.resources.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* IDEAS */}
      <section className="px-8 py-16">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">{dict.ideas.title}</h3>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            {dict.ideas.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-12">
          {dict.faq.title}
        </h3>
        <div className="max-w-2xl mx-auto space-y-4">
          {dict.faq.questions.map((savol, i) => (
            <details key={i} className="bg-white p-4 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">{savol}</summary>
              <p className="mt-2 text-gray-600">{dict.faq.answer}</p>
            </details>
          ))}
        </div>  
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-6 bg-white text-center border-t">
        <p className="font-medium text-gray-700">{dict.footer}</p>
      </footer>
    </main>
  );
}
