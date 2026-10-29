import Image from "next/image";
import Link from "next/link";
import OnlineSticker from "@/components/OnlineSticker";
import SectionTitle from "@/components/SectionTitle";
import SocialLinks from "@/components/SocialLinks";
import { contacts, messengers, networks } from "@/lib/data";

export default function MapSection() {
  return (
    <section id="map" className="relative mt-[120px] h-[1120px] overflow-hidden">
      <Image
        src="/images/map.png"
        alt="Карта: ул. Черкизова 14, Москва"
        width={1024}
        height={657}
        className="absolute left-1/2 top-[50px] h-[997px] w-[max(100%,1920px)] max-w-none -translate-x-1/2 object-cover"
      />
      <div className="absolute inset-x-0 top-0 h-[100px] bg-linear-to-b from-light to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[100px] bg-linear-to-t from-light to-transparent" />

      <div className="container-main relative h-full">
        <span
          aria-hidden="true"
          className="absolute left-[470px] top-[531px] size-[52px] bg-brand-gradient [mask-image:url(/images/icons/marker.png)] [mask-size:contain]"
        />

        <div className="absolute left-[-13px] top-[159px] h-[211px] w-[737px] rounded-[40px] bg-white px-[30px] pt-[30px]">
          <SectionTitle title="Мы на карте" script="где искать?" layout="stacked-end" />
        </div>

        <div className="absolute inset-x-[20px] top-[915px] flex h-[190px] items-center justify-between rounded-[60px] bg-white px-[80px]">
          <div className="flex gap-[75px]">
            <div>
              <p>Социальные сети:</p>
              <SocialLinks items={networks} size={30} className="mt-[14px] gap-[10px]" />
            </div>
            <div>
              <Link href={contacts.phoneHref}>{contacts.phone}</Link>
              <SocialLinks items={messengers} size={30} className="mt-[14px] gap-[10px]" />
            </div>
          </div>

          <OnlineSticker />

          <div className="flex items-start gap-[75px]">
            <p className="flex w-[198px] gap-[16px]">
              <span
                aria-hidden="true"
                className="mt-[1px] size-[26px] shrink-0 bg-navy [mask-image:url(/images/icons/location.png)] [mask-size:contain]"
              />
              {contacts.street}
            </p>
            <div>
              <p className="text-[24px] font-bold leading-[30px] tracking-[-0.03em]">Как добраться?</p>
              <p className="mt-[10px] text-navy/80">{contacts.routes}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
