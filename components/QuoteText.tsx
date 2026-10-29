import Image from "next/image";

type QuoteTextProps = {
  className?: string;
  before: string;
  accent: string;
  after: string;
  wave: {
    src: string;
    width: number;
    height: number;
  };
};

export default function QuoteText({ before, accent, after, wave, className = "" }: QuoteTextProps) {
  return (
    <section className={`container-main ${className}`}>
      <p className="text-[42px] font-semibold leading-[62px] tracking-[-0.024em]">
        {before}{" "}
        <span className="relative whitespace-nowrap">
          {accent}
          <Image
            src={wave.src}
            alt=""
            width={wave.width}
            height={wave.height}
            className="absolute -bottom-[6px] left-0 max-w-none"
          />
        </span>{" "}
        {after}
      </p>
    </section>
  );
}
