import Image from "next/image";
import Link from "next/link";
import type { Social } from "@/lib/data";

type SocialLinksProps = {
  items: Social[];
  size: number;
  className?: string;
};

export default function SocialLinks({ items, size, className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex items-center ${className}`}>
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            aria-label={item.name}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="block transition-transform hover:scale-110"
          >
            <Image src={item.icon} alt={item.name} width={size} height={size} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
