import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "header" | "footer" | "white";
  className?: string;
};

const variants = {
  header: {
    prefix: "/images/logo",
    widths: [66, 81, 33],
    height: 13,
    gap: "gap-[3px]",
    width: "w-[82px]",
  },
  footer: {
    prefix: "/images/footer-logo",
    widths: [66, 81, 33],
    height: 14,
    gap: "gap-[3.3px]",
    width: "w-[82px]",
  },
  white: {
    prefix: "/images/logo-white",
    widths: [252, 309, 123],
    height: 51,
    gap: "gap-[8px]",
    width: "w-[311px]",
  },
};

const parts = ["surf", "train", "co"];

export default function Logo({ variant = "header", className = "" }: LogoProps) {
  const logo = variants[variant];

  return (
    <Link
      href="/"
      aria-label="SurfTrainCo — на главную"
      className={`flex flex-col ${logo.gap} ${logo.width} ${className}`}
    >
      {parts.map((part, index) => (
        <Image
          key={part}
          src={`${logo.prefix}-${part}.svg`}
          alt=""
          width={logo.widths[index]}
          height={logo.height}
          className={index === 2 ? "self-end" : ""}
        />
      ))}
    </Link>
  );
}
