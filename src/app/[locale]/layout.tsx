"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import en from "@/messages/en.json";
import uz from "@/messages/uz.json";
import ru from "@/messages/ru.json";

type Locale = "en" | "uz" | "ru";
const dictionaries: Record<Locale, any> = { en, uz, ru };

export default function LocaleLayout({ children }: { children: ReactNode }) {
  const params = useParams();

  // params.locale string | string[] bo'lishi mumkin
  let localeStr: string;
  if (Array.isArray(params?.locale)) {
    localeStr = params.locale[0]; // agar array bo'lsa birinchi element
  } else {
    localeStr = params?.locale || "uz"; // undefined bo'lsa default "uz"
  }

  const locale: Locale = localeStr in dictionaries ? (localeStr as Locale) : "uz";
  const dict = dictionaries[locale];

  return (
    <div data-locale={locale}>
      {children}
      <footer style={{ marginTop: 20, opacity: 0.6 }}>
        {dict.hello} | {dict.help}
      </footer>
    </div>
  );
}
