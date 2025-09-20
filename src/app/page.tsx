"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Home() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);


  const navLinks = [
    { title: "Asosiy", path: "/" },
    { title: "Xizmatlar", path: "/xizmatlar" },
    { title: "Narxlar", path: "/narxlar" },
    { title: "Bog‘lanish", path: "/boglanish" },
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
          RaqamliBank
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
            Boshlash
          </button>
        </div>

        {/* RIGHT: Mobile language switcher */}
        <div className="flex md:hidden items-center space-x-1">
          {[
            { code: "uz", path: "/" },
            { code: "ru", path: "/ru" },
            { code: "en", path: "/en" },
          ].map((lang) => (
            <Link
              key={lang.code}
              href={lang.path}
              className={`px-2 py-1 rounded-md transition text-xs ${
                pathname === lang.path
                  ? "bg-green-600 text-white font-semibold"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              {lang.code.toUpperCase()}
            </Link>
          ))}
        </div>
      </header>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-lg font-bold text-green-600">Menyu</h2>
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
            Boshlash
          </button>
        </nav>
      </div>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-8 px-8 py-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Keyingi avlod <span className="text-green-600">raqamli bank</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Moliyaviy hayotingizni boshqarish uchun zamonaviy va oson platforma.
            Onlayn banking, byudjetlash, tezkor o‘tkazmalar va API imkoniyatlari.
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
            Hozir boshlang
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
          Nega <span className="text-green-600">RaqamliBank</span>?
        </h3>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="font-semibold text-lg mb-2">Onlayn Banking</h4>
            <p className="text-gray-600">Dunyoning istalgan joyidan moliyangizni boshqaring.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Oddiy Byudjetlash</h4>
            <p className="text-gray-600">Xarajatlaringizni kuzatib boring va rejalashtiring.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Tezkor O‘tkazmalar</h4>
            <p className="text-gray-600">Pulni bir necha soniyada o‘tkazing.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Ochiq API</h4>
            <p className="text-gray-600">Bizning API orqali xizmatlaringizni kengaytiring.</p>
          </div>
        </div>
      </section>

      {/* BRIEF & ASSETS */}
      <section className="px-8 py-16 grid md:grid-cols-2 gap-12">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">📋 Qisqa ma’lumot</h3>
          <p className="text-gray-700 mb-2">
            Sizning vazifangiz — ushbu landing sahifani yaratish va dizaynga imkon qadar yaqinlashtirish.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Foydalanuvchi ekraniga mos interfeys tuzish</li>
            <li>Interaktiv elementlarga e’tibor qaratish</li>
            <li><span className="text-green-600">README</span> faylidan foydalanish</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">📦 Berilgan resurslar</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>JPEG dizayn fayllari</li>
            <li>Ranglar, shriftlar uchun style guide</li>
            <li>Optimallashtirilgan rasmlar</li>
            <li>README fayl</li>
            <li>HTML fayl (tayyor kontent bilan)</li>
          </ul>
        </div>
      </section>

      {/* IDEAS */}
      <section className="px-8 py-16">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">💡 O‘zingizni sinab ko‘ring</h3>
          <ol className="list-decimal pl-6 text-gray-600 space-y-2">
            <li>Sass yoki Less yordamida stillarni yozish</li>
            <li>Dizaynga maksimal yaqinlashtirish</li>
            <li>Loyihani bajarish vaqtini taxmin qilish</li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-12">❓ Tez-tez so‘raladigan savollar</h3>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            "Agar qiynalsam, yordamni qayerdan olsam bo‘ladi?",
            "Qanday qilib o‘z yechimimni topshiraman?",
            "Rasmiy yechimni ko‘rishim mumkinmi?",
            "Topshirganimda kodga sharh olamanmi?",
            "Bu loyihalarda framework ishlatish mumkinmi?",
            "Portfolio uchun foydalansam bo‘ladimi?",
            "Yangi vazifalar qanchalik tez qo‘shiladi?",
            "Desktop va mobil dizayn o‘rtasidagi farq nima?",
            "Bepul yoki tijoriy loyihalarda foydalanish mumkinmi?",
          ].map((savol, i) => (
            <details key={i} className="bg-white p-4 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">{savol}</summary>
              <p className="mt-2 text-gray-600">Javob tez orada qo‘shiladi...</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-6 bg-white text-center border-t">
        <p className="font-medium text-gray-700">
          © 2025 <span className="text-green-600">RaqamliBank</span>. Barcha huquqlar himoyalangan.
        </p>
      </footer>
    </main>
  );
}
