"use client";

import { useParams } from "next/navigation";
import en from "../../messages/en.json";
import uz from "../../messages/uz.json";
import ru from "../../messages/ru.json";

// Locale tiplari
type Locale = "en" | "uz" | "ru";

// JSON fayllarining tuzilishi
interface Dictionary {
  hello: string;
  help: string;
} 

// dictionaries tipini aniqlash
const dictionaries: Record<Locale, Dictionary> = { en, uz, ru };

export default function Page() {
  const params = useParams();

  // params.locale string | string[] bo'lishi mumkin
  let localeStr: string;
  if (Array.isArray(params?.locale)) {
    localeStr = params.locale[0];
  } else {
    localeStr = params?.locale || "uz";
  }

  const locale: Locale = localeStr in dictionaries ? (localeStr as Locale) : "uz";
  const dict = dictionaries[locale];

  return (
    <main>
      <h1>{dict.hello}</h1>
      <p>{dict.help}</p>
    </main>
  );
}
