import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import ProgramFeatures from "@/components/ProgramFeatures";
import ProgramMeta from "@/components/ProgramMeta";
import ProgramPrice from "@/components/ProgramPrice";
import type { Program } from "@/lib/data";

type ProgramCardProps = {
  program: Program;
};

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="relative flex min-h-[900px] flex-col rounded-[60px] bg-white px-[40px] pb-[60px] pt-[133px]">
      <Image
        src={program.icon}
        alt=""
        width={234}
        height={234}
        className="absolute left-1/2 top-[-117px] -translate-x-1/2"
      />

      <div className="text-center">
        <p className="text-[16px] leading-[20px] text-navy/80">-тариф-</p>
        <h3 className="mt-[8px] text-[40px] font-semibold leading-[48px] tracking-normal">{program.name}</h3>
      </div>

      <div className="mt-[42px]">
        <ProgramMeta program={program} />
      </div>

      <div className="mt-[40px] px-[21.5px]">
        <ProgramFeatures features={program.features} />
      </div>

      <div className="mt-[40px]">
        <ProgramPrice oldPrice={program.oldPrice} price={program.price} />
      </div>

      <ButtonLink href={`/programs/${program.slug}`} className="mt-auto">
        Выбрать тариф
      </ButtonLink>
    </article>
  );
}
