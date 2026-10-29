import Image from "next/image";
import Link from "next/link";
import HashLink from "@/components/HashLink";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import SocialLinks from "@/components/SocialLinks";
import { contacts, messengers } from "@/lib/data";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-[30px] z-20">
      <div className="container-main flex items-center justify-between">
        <Logo />
        <Nav />

        <div className="flex items-center gap-[15px]">
          <SocialLinks items={messengers} size={25} className="gap-[7px]" />
          <Link href={contacts.phoneHref} className="font-semibold">
            {contacts.phone}
          </Link>
        </div>

        <HashLink
          href="/#about"
          className="flex h-[57px] w-[160px] items-center justify-between rounded-full bg-navy pl-[23px] pr-[26px] text-[16px] text-white transition-opacity hover:opacity-90"
        >
          Подробнее
          <Image src="/images/icons/arrow-more.svg" alt="" width={17} height={16} className="-rotate-45" />
        </HashLink>
      </div>
    </header>
  );
}
