import { ReactNode } from "react";
import { notFound } from "next/navigation";

import en from "@/messages/en.json";
import uz from "@/messages/uz.json";
import ru from "@/messages/ru.json";

type Locale = "en" | "uz" | "ru";

const dictionaries: Record<Locale, any> = { en, uz, ru };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string }; // string qoldiring, keyin tekshirish
}) {
  // params.locale ni tekshirib, default uz
  const locale = params.locale && params.locale in dictionaries ? (params.locale as Locale) : "uz";
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
