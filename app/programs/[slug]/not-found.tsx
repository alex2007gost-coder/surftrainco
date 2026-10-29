import ButtonLink from "@/components/ButtonLink";
import SectionTitle from "@/components/SectionTitle";

export default function NotFound() {
  return (
    <section className="container-main flex flex-col items-start pt-[200px]">
      <SectionTitle title="Тариф" script="не найден" as="h1" />
      <p className="mt-[30px] text-navy/80">Такой программы обучения у нас нет. Посмотрите все тарифы SurfTrainCo.</p>
      <ButtonLink href="/programs" className="mt-[40px]">
        Все программы
      </ButtonLink>
    </section>
  );
}
