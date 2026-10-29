import Image from "next/image";
import HashLink from "@/components/HashLink";

type OnlineStickerProps = {
  className?: string;
};

export default function OnlineSticker({ className = "" }: OnlineStickerProps) {
  return (
    <HashLink
      href="/contacts#booking"
      aria-label="Онлайн-запись"
      className={`grid size-[131px] shrink-0 place-items-center transition-transform hover:scale-105 ${className}`}
    >
      <Image src="/images/sticker.svg" alt="" width={131} height={131} className="col-start-1 row-start-1" />
      <Image src="/images/sticker-icon.png" alt="" width={47} height={47} className="col-start-1 row-start-1" />
    </HashLink>
  );
}
