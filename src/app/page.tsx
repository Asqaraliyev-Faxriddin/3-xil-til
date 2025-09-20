import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6 shadow">
        <h1 className="text-2xl font-bold text-green-600">RaqamliBank</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-green-600">Asosiy</a>
          <a href="#" className="hover:text-green-600">Xizmatlar</a>
          <a href="#" className="hover:text-green-600">Narxlar</a>
          <a href="#" className="hover:text-green-600">Bog‘lanish</a>
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg ml-4">
          Boshlash
        </button>
      </header>

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

      {/* BRIEF & ASSETS & IDEAS */}
      <section className="px-8 py-16 grid md:grid-cols-2 gap-12">
        {/* Brief */}
        <div className="bg-white shadow rounded-lg p-6 border">
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

        {/* Assets */}
        <div className="bg-white shadow rounded-lg p-6 border">
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
        <div className="bg-white shadow rounded-lg p-6 border">
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
            "Bepul yoki tijoriy loyihalarda foydalanish mumkinmi?"
          ].map((savol, i) => (
            <details key={i} className="bg-white p-4 border rounded-lg">
              <summary className="font-semibold cursor-pointer">{savol}</summary>
              <p className="mt-2 text-gray-600">Javob tez orada qo‘shiladi...</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-6 bg-gray-800 text-white text-center">
        <p>© 2025 RaqamliBank. Barcha huquqlar himoyalangan.</p>
      </footer>
    </main>
  );
}
