import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import ProgramFeatures from "@/components/ProgramFeatures";
import ProgramMeta from "@/components/ProgramMeta";
import ProgramPrice from "@/components/ProgramPrice";
import SectionTitle from "@/components/SectionTitle";
import { programs } from "@/lib/data";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export default async function ProgramPage({ params }: PageProps<"/programs/[slug]">) {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <section className="container-main pt-[200px]">
      <Link href="/programs" className="text-navy/80 transition-colors hover:text-brand">
        ← Все программы
      </Link>

      {/* Название тарифа */}
      <div className="mt-[30px]">
        <SectionTitle title={program.name} script="тариф" as="h1" />
      </div>

      {/* Подробности тарифа */}
      <div className="mt-[60px] grid grid-cols-[560px_1fr] gap-[30px]">
        <div className="flex flex-col items-center justify-center gap-[50px] rounded-[60px] bg-white p-[60px]">
          <Image src={program.icon} alt={program.name} width={340} height={340} />
          <ProgramMeta program={program} />
        </div>

        <div className="flex flex-col rounded-[60px] bg-white p-[60px]">
          <ProgramFeatures features={program.features} />

          <div className="mt-[50px]">
            <ProgramPrice oldPrice={program.oldPrice} price={program.price} />
          </div>

          <ButtonLink href="/contacts#booking" className="mt-[50px]">
            Записаться на занятие
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
