import Image from "next/image";

type ProgramFeaturesProps = {
  features: string[];
};

export default function ProgramFeatures({ features }: ProgramFeaturesProps) {
  return (
    <ul className="flex flex-col gap-[20px]">
      {features.map((feature) => (
        <li key={feature} className="flex min-h-[44px] items-center gap-[26px]">
          <Image src="/images/icons/check.svg" alt="" width={35} height={33} className="shrink-0" />
          <span className="text-navy/80">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
