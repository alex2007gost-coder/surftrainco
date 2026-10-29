import AwardsSlider from "@/components/AwardsSlider";
import PaperSection from "@/components/PaperSection";
import SectionTitle from "@/components/SectionTitle";
import { awards, awardYears } from "@/lib/data";

export default function Awards() {
  return (
    <PaperSection id="awards" background="/images/backgrounds/awards.svg" className="h-[1020px] overflow-hidden pt-[108px]">
      <div className="container-main flex items-end justify-between">
        <SectionTitle title="Награды" script="нашего клуба" />

        <ul className="mb-[18px] flex gap-[39px]">
          {awardYears.map((year, index) => (
            <li
              key={year}
              className={index === 0 ? "border-b border-navy text-navy" : "border-b border-transparent text-navy/40"}
            >
              {year}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[69px]">
        <AwardsSlider awards={awards} />
      </div>
    </PaperSection>
  );
}
