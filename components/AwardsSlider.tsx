"use client";

import { useState } from "react";
import AwardCard from "@/components/AwardCard";
import type { Award } from "@/lib/data";

type AwardsSliderProps = {
  awards: Award[];
};

export default function AwardsSlider({ awards }: AwardsSliderProps) {
  const [active, setActive] = useState(0);
  const count = awards.length;
  const visible = [count - 1, 0, 1].map((offset) => awards[(active + offset) % count]);

  return (
    <div>
      <div className="relative h-[569px]">
        <div className="absolute left-1/2 top-0 flex -translate-x-1/2 gap-[30px]">
          {visible.map((award) => (
            <AwardCard key={award.title} award={award} />
          ))}
        </div>
      </div>

      <div className="mt-[60px] flex justify-center gap-[10px]">
        {awards.map((award, index) => (
          <button
            key={award.title}
            type="button"
            aria-label={`Награда ${index + 1}`}
            onClick={() => setActive(index)}
            className={`size-[15px] cursor-pointer rounded-full transition-colors ${
              index === active ? "bg-navy" : "bg-navy/20 hover:bg-navy/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
