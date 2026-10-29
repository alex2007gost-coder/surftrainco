"use client";

import Image from "next/image";
import { useState } from "react";
import PromoCard from "@/components/PromoCard";
import SectionTitle from "@/components/SectionTitle";
import type { Promo } from "@/lib/data";

type PromosSliderProps = {
  promos: Promo[];
};

export default function PromosSlider({ promos }: PromosSliderProps) {
  const [start, setStart] = useState(0);
  const count = promos.length;
  const visible = promos.map((_, index) => promos[(start + index) % count]);

  const showPrev = () => setStart((current) => (current - 1 + count) % count);
  const showNext = () => setStart((current) => (current + 1) % count);

  return (
    <div className="container-main">
      <div className="flex items-start justify-between">
        <SectionTitle title="Акции" script="и скидки" />

        <div className="mt-[13px] flex gap-[15px]">
          <button type="button" aria-label="Предыдущая акция" onClick={showPrev} className="cursor-pointer">
            <Image src="/images/icons/slider-arrow.svg" alt="" width={60} height={60} className="rotate-180" />
          </button>
          <button type="button" aria-label="Следующая акция" onClick={showNext} className="cursor-pointer">
            <Image src="/images/icons/slider-arrow.svg" alt="" width={60} height={60} />
          </button>
        </div>
      </div>

      <div className="mt-[66px] grid grid-cols-3 gap-[30px]">
        {visible.map((promo) => (
          <PromoCard key={promo.title} promo={promo} />
        ))}
      </div>
    </div>
  );
}
