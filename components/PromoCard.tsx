import Image from "next/image";
import HashLink from "@/components/HashLink";
import type { Promo } from "@/lib/data";

type PromoCardProps = {
  promo: Promo;
};

export default function PromoCard({ promo }: PromoCardProps) {
  return (
    <article className="rounded-[60px] bg-light p-[30px]">
      <HashLink href="/contacts#booking" className="group relative block h-[365px] overflow-hidden rounded-[40px] text-white">
        <Image
          src={promo.image}
          alt={promo.title.replace("\n", " ")}
          fill
          sizes="367px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/10" />

        <div className="absolute inset-x-[30px] top-[30px] flex items-center justify-between">
          <span className="text-[14px] leading-[18px]">{promo.term}</span>
          <Image src="/images/icons/promo-arrow.svg" alt="" width={18} height={18} className="-rotate-45" />
        </div>
        <h3 className="absolute inset-x-[30px] bottom-[26px] whitespace-pre-line text-[17px] font-semibold leading-[22px]">{promo.title}</h3>
      </HashLink>
    </article>
  );
}
