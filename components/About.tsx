import Image from "next/image";
import Logo from "@/components/Logo";
import OnlineSticker from "@/components/OnlineSticker";
import PaperSection from "@/components/PaperSection";
import SectionTitle from "@/components/SectionTitle";

const avatars = ["/images/about/avatar-1.png", "/images/about/avatar-2.png", "/images/about/avatar-3.png"];

export default function About() {
  return (
    <PaperSection id="about" background="/images/backgrounds/about.svg" className="mt-[94px] h-[1000px] pt-[110px]">
      <div className="container-main">
        <SectionTitle title="Серфинг" script="это стиль жизни" layout="stacked" />

        <div className="relative mt-[44px] flex gap-[10px]">
          <div className="relative h-[500px] flex-1 overflow-hidden rounded-[40px]">
            <Image src="/images/about/photo.png" alt="Серфер на волне" fill sizes="894px" className="object-fill" />
            <Logo variant="white" className="absolute left-[277px] top-[186px]" />
          </div>

          <div className="flex w-[436px] flex-col gap-[10px]">
            <div className="h-[349px] rounded-[40px] bg-navy px-[47px] pt-[36px] text-white">
              <h3 className="text-[42px] font-medium leading-[48px] tracking-[-0.02em]">SurfTrainCo —</h3>
              <p className="mt-[24px] whitespace-pre-line">
                {"это компания по обучению серфингу,\nрасположенная в Москве, которая\nоткрылась в 2018 году."}
              </p>
              <p className="mt-[20px] whitespace-pre-line">
                {
                  "Ее миссия состоит в том, чтобы\nобеспечить доступное, всестороннее\nи приятное обучение серфингу\nдля всех уровней навыков и возрастов."
                }
              </p>
            </div>

            <div className="flex h-[141px] items-center gap-[30px] rounded-[40px] border border-navy/40 bg-white px-[41px]">
              <ul className="flex">
                {avatars.map((avatar, index) => (
                  <li key={avatar} className={`shrink-0 ${index > 0 ? "-ml-[23px]" : ""}`}>
                    <Image src={avatar} alt="Ученик школы" width={80} height={80} className="size-[80px] rounded-full object-cover" />
                  </li>
                ))}
              </ul>
              <p className="flex flex-col">
                <span className="text-[44px] font-medium leading-[48px] tracking-[-0.03em]">2000+</span>
                <span className="text-navy/80">учеников</span>
              </p>
            </div>
          </div>

          <OnlineSticker className="absolute right-[-20px] top-[-54px] min-[1434px]:right-[-47px]" />
        </div>
      </div>
    </PaperSection>
  );
}
