import Image from "next/image";
import type { Award } from "@/lib/data";

type AwardCardProps = {
  award: Award;
};

export default function AwardCard({ award }: AwardCardProps) {
  return (
    <article className="flex h-[569px] w-[min(1340px,calc(100vw-40px))] shrink-0 rounded-[60px] bg-light p-[30px]">
      <Image
        src={award.image}
        alt={award.title.replace("\n", " ")}
        width={625}
        height={509}
        className="relative z-10 h-[509px] w-[625px] shrink-0 rounded-[40px] object-cover"
      />

      <div className="relative -ml-[114px] flex-1 rounded-[40px] bg-white pl-[228px] pr-[30px] pt-[104px]">
        <p className="text-[14px] leading-[18px] text-navy/80">{award.label}</p>
        <h3 className="mt-[12px] whitespace-pre-line text-[42px] font-medium leading-[53px] tracking-[-0.03em]">
          {award.title}
        </h3>
        <p className="mt-[30px] whitespace-pre-line">{award.organization}</p>
        <p className="mt-[62px]">({award.year})</p>

        <Image
          src="/images/icons/award-more.svg"
          alt=""
          width={55}
          height={55}
          className="absolute bottom-[13px] right-[13px]"
        />
      </div>
    </article>
  );
}
