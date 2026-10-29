import Image from "next/image";

type PaperSectionProps = {
  background: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function PaperSection({ background, id, className = "", children }: PaperSectionProps) {
  return (
    <section id={id} className={`relative isolate ${className}`}>
      <Image src={background} alt="" fill className="-z-10 object-fill" />
      {children}
    </section>
  );
}
