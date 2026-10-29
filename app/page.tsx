import About from "@/components/About";
import Awards from "@/components/Awards";
import Hero from "@/components/Hero";
import QuoteText from "@/components/QuoteText";

export default function HomePage() {
  return (
    <>
      {/* Главный экран */}
      <Hero />

      {/* О нас */}
      <About />

      {/* Текстовый блок */}
      <QuoteText
        before="Не бойтесь испытать себя и свои возможности - поддайтесь волнам и пусть они помогут вам раскрыть свой истинный потенциал."
        accent="Погрузитесь в мир серфинга"
        after="и почувствуйте, как ваша жизнь наполняется яркими эмоциями и волнующими приключениями. Погнали волну!"
        wave={{ src: "/images/wave-text-1.svg", width: 569, height: 12 }}
        className="pb-[90px] pt-[84px]"
      />

      {/* Награды */}
      <Awards />
    </>
  );
}
