import { ReactNode } from "react";
import { notFound } from "next/navigation";

import en from "@/messages/en.json";
import uz from "@/messages/uz.json";
import ru from "@/messages/ru.json";

type Locale = "en" | "uz" | "ru";

const dictionaries: Record<Locale, any> = { en, uz, ru };

export default function LocaleLayout({children,params,}: {children: ReactNode;params: { locale: Locale }}) {
    
  if (!(params.locale in dictionaries)) {
    notFound();
  }

  const dict = dictionaries[params.locale];

  return (
    <div data-locale={params.locale}>
      {children}
      <footer style={{ marginTop: 20, opacity: 0.6 }}>
        {dict.hello} | {dict.help}
      </footer>
    </div>
  );
}
