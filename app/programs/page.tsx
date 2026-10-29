import Programs from "@/components/Programs";
import Promos from "@/components/Promos";
import QuoteText from "@/components/QuoteText";

export default function ProgramsPage() {
  return (
    <>
      {/* Программы обучения */}
      <Programs />

      {/* Акции и скидки */}
      <Promos />

      {/* Текстовый блок */}
      <QuoteText
        before="Помните, что каждый ваш выход на доску - это возможность"
        accent="выйти за пределы своих комфортных зон"
        after={"и стать лучше, сильнее и\u00A0увереннее. Поверьте в себя, стремитесь к новым вершинам и\u00A0не\u00A0забывайте наслаждаться каждым мгновением на доске."}
        wave={{ src: "/images/wave-text-2.svg", width: 821, height: 12 }}
        className="pt-[104px]"
      />
    </>
  );
}
