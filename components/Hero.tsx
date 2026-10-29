import Image from "next/image";
import AdvantageCard from "@/components/AdvantageCard";
import OnlineSticker from "@/components/OnlineSticker";
import { advantages, contacts } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-[1161px]">
      <Image
        src="/images/hero-bg.png"
        alt=""
        width={1920}
        height={1297}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-x-0 top-0 h-[1297px] w-full object-cover object-top"
      />

      <div className="container-main relative pt-[206px]">
        <p className="font-script text-[34px] leading-[40px] tracking-normal text-brand">{contacts.street}</p>

        <h1 className="-ml-[4px] mt-[15px] text-[117px] font-extrabold uppercase leading-[128px] tracking-[-0.035em]">
          <span className="block">
            Покоряйте{" "}
            <span className="relative inline-block">
              волны
              <Image
                src="/images/wave-hero.svg"
                alt=""
                width={410}
                height={15}
                className="absolute bottom-[1px] left-[15px] max-w-none"
              />
            </span>
          </span>
          <span className="flex items-center gap-[36px]">
            Вместе
            <OnlineSticker className="-mr-[9px] ml-[3px]" />
            с нами!
          </span>
        </h1>

        <p className="mt-[16px] whitespace-pre-line text-navy/80">
          {"SurfTrainCo предлагает вам доступное,\nкомплексное и приятное обучение серфингу\nдля всех уровней навыков и возрастов."}
        </p>
      </div>

      <div className="absolute bottom-0 left-1/2 w-[calc(100%-40px)] max-w-[1408px] -translate-x-1/2 rounded-[50px] bg-light px-[35px] py-[34px]">
        <div className="grid grid-cols-4 gap-[30px]">
          {advantages.map((advantage) => (
            <AdvantageCard key={advantage.title} advantage={advantage} />
          ))}
        </div>
      </div>
    </section>
  );
}
