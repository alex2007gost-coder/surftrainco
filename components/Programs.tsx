import ProgramCard from "@/components/ProgramCard";
import SectionTitle from "@/components/SectionTitle";
import { programs } from "@/lib/data";

export default function Programs() {
  return (
    <section className="container-main pb-[120px] pt-[200px]">
      <SectionTitle title="Программы" script="обучения" as="h1" />

      <div className="mt-[160px] grid grid-cols-2 gap-[30px]">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </section>
  );
}
