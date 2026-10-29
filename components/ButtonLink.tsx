import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ButtonLink({ href, children, className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`flex h-[77px] items-center justify-center rounded-full bg-brand-gradient px-[50px] text-[22px] font-bold text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </Link>
  );
}
