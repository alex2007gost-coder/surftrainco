import Image from "next/image";
import PaperSection from "@/components/PaperSection";
import PromoCard from "@/components/PromoCard";
import SectionTitle from "@/components/SectionTitle";
import { promos } from "@/lib/data";

export default function Promos() {
  return (
    <PaperSection id="promos" background="/images/backgrounds/promos.svg" className="h-[900px] overflow-hidden pt-[108px]">
      <Image
        src="/images/promos/board-left.svg"
        alt=""
        width={180}
        height={629}
        className="absolute left-[59px] top-[137px] hidden -rotate-[10.5deg] min-[1700px]:block"
      />
      <Image
        src="/images/promos/board-right.svg"
        alt=""
        width={180}
        height={629}
        className="absolute right-[55px] top-[137px] hidden rotate-[10.5deg] min-[1700px]:block"
      />

      <div className="container-main">
        <SectionTitle title="Акции" script="и скидки" />

        <div className="mt-[66px] grid grid-cols-3 gap-[30px]">
          {promos.map((promo) => (
            <PromoCard key={promo.title} promo={promo} />
          ))}
        </div>
      </div>
    </PaperSection>
  );
}
