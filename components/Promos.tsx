import Image from "next/image";
import PaperSection from "@/components/PaperSection";
import PromosSlider from "@/components/PromosSlider";
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

      <PromosSlider promos={promos} />
    </PaperSection>
  );
}
