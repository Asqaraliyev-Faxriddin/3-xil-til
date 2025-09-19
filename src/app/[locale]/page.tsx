import en from "../../messages/en.json";
import uz from "../../messages/uz.json";
import ru from "../../messages/ru.json";

type Locale = "en" | "uz" | "ru";

const dictionaries: Record<Locale, any> = {
  en,
  uz,
  ru,
};

export default function Page({ params }: { params: { locale: Locale } }) {
  const dict = dictionaries[params.locale] || dictionaries.en;

  return (
    <main>
      <h1>{dict.hello}</h1>
      <p>{dict.help}</p>
    </main>
  );
}
