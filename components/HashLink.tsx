"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const [path, hash] = href.split("#");
    const target = hash ? document.getElementById(hash) : null;

    if (target && (path || pathname) === pathname) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
