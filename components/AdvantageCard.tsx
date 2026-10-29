import Image from "next/image";
import type { Advantage } from "@/lib/data";

type AdvantageCardProps = {
  advantage: Advantage;
};

export default function AdvantageCard({ advantage }: AdvantageCardProps) {
  const { title, text, image, badge, dark } = advantage;

  return (
    <article
      className={`relative h-[355px] overflow-hidden rounded-[40px] ${dark ? "bg-navy text-white" : "bg-white text-navy"}`}
    >
      <div className="absolute left-[11px] top-[20px] h-[159px] w-[292px]">
        <Image
          src={dark ? "/images/advantages/frame-light.svg" : "/images/advantages/frame-navy.svg"}
          alt=""
          width={dark ? 293 : 292}
          height={dark ? 160 : 159}
        />
        <Image src={image} alt={title} width={270} height={147} className="absolute left-[9px] top-[5px]" />
      </div>
      <Image src={badge} alt="" width={80} height={80} className="absolute left-[202px] top-[97px]" />

      <div className="absolute left-[30px] right-[30px] top-[204px]">
        <h3 className="text-[clamp(20px,1.7vw,26px)] font-bold leading-[29px] tracking-[-0.02em]">{title}</h3>
        <p
          className={`mt-[14px] whitespace-pre-line text-[14px] leading-[19px] tracking-[-0.01em] ${dark ? "text-white/80" : "text-navy/80"}`}
        >
          {text}
        </p>
      </div>
    </article>
  );
}
