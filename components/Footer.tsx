import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
import { contacts, footerLinks, messengers } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative h-[538px] overflow-hidden bg-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-71px] top-[39px] select-none text-[592px] font-extrabold leading-[462px] tracking-[-0.05em] text-[#f2f4f5]"
      >
        CONTACTS
      </span>

      <div className="container-main relative grid h-full grid-cols-[427px_456px_1fr] pt-[96px]">
        <div>
          <Logo variant="footer" />
          <p className="mt-[28px] w-[200px] text-[14px] leading-[19px] text-navy/80">
            Свяжитесь с нами любым удобным способом
          </p>
          <SocialLinks items={messengers} size={29} className="mt-[17px] gap-[10px]" />
        </div>

        <div className="pt-[9px]">
          <h3 className="text-[24px] font-bold leading-[30px] tracking-[-0.03em]">Контакты</h3>
          <ul className="mt-[30px] flex flex-col gap-[10px]">
            <li className="text-[17px]">
              <Link href={contacts.phoneHref}>{contacts.phone}</Link>
            </li>
            <li className="text-[17px]">
              <Link href={`mailto:${contacts.email}`}>{contacts.email}</Link>
            </li>
            <li className="text-[14px] text-navy/80">{contacts.address}</li>
            <li className="text-[14px] text-navy/80">{contacts.hours}</li>
          </ul>
        </div>

        <div className="pt-[9px]">
          <h3 className="text-[24px] font-bold leading-[30px] tracking-[-0.03em]">Для клиентов</h3>
          <ul className="mt-[30px] flex flex-col gap-[10px]">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="absolute left-[20px] top-[460px] text-[14px] leading-[20px] text-navy/80">(с) SurfTrainCo, 2023</p>
        <Link href="#" className="absolute left-[903px] top-[459px]">
          Публичная оферта
        </Link>
        <Link href="#" className="absolute left-[465px] top-[507px]">
          Политика конфиденциальности
        </Link>
      </div>

      <Link href="#top" aria-label="Наверх" className="absolute right-[80px] top-[381px] transition-transform hover:-translate-y-1">
        <Image src="/images/icons/to-top.svg" alt="" width={92} height={100} />
      </Link>
    </footer>
  );
}
