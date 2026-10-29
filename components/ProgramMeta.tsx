import Image from "next/image";
import type { Program } from "@/lib/data";

type ProgramMetaProps = {
  program: Program;
};

export default function ProgramMeta({ program }: ProgramMetaProps) {
  const items = [
    { icon: "/images/icons/calendar.svg", label: "длительность курса", value: program.courseDuration },
    { icon: "/images/icons/timer.svg", label: "длительность урока", value: program.lessonDuration },
  ];

  return (
    <ul className="flex justify-center gap-[40px]">
      {items.map((item) => (
        <li key={item.label} className="flex w-[221px] items-center gap-[20px]">
          <Image src={item.icon} alt="" width={60} height={59} />
          <p className="flex flex-col gap-[4px]">
            <span className="text-[15px] leading-[19px] text-navy/80">{item.label}</span>
            <span>{item.value}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
