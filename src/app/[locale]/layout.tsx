  "use client";

  import { ReactNode } from "react";
  import { useParams } from "next/navigation";
  import en from "@/messages/en.json";
  import uz from "@/messages/uz.json";
  import ru from "@/messages/ru.json";

  // Locale tiplari
  type Locale = "en" | "uz" | "ru";

  // JSON faylining to‘liq interfeysi
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

  // dictionaries tipini aniqlash
  const dictionaries: Record<Locale, Dictionary> = { en, uz, ru };

  export default function LocaleLayout({ children }: { children: ReactNode }) {
    const params = useParams();

    // params.locale string | string[] bo'lishi mumkin
    let localeStr: string;
    if (Array.isArray(params?.locale)) {
      localeStr = params.locale[0]; // agar array bo'lsa birinchi element
    } else {
      localeStr = params?.locale || "uz"; // undefined bo'lsa default "uz"
    }

    // locale ni tekshirish
    const locale: Locale =
      localeStr in dictionaries ? (localeStr as Locale) : "uz";
    const dict = dictionaries[locale];

    return (
      <div data-locale={locale}>
        {children}
        <footer style={{ marginTop: 20, opacity: 0.6, textAlign: "center" }}>
          <strong>{dict.logo}</strong> — {dict.footer}
        </footer>
      </div>
    );
  }
