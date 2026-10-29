type ProgramPriceProps = {
  oldPrice: string;
  price: string;
};

export default function ProgramPrice({ oldPrice, price }: ProgramPriceProps) {
  return (
    <p className="flex flex-col items-center">
      <span className="text-[24px] leading-[30px] text-navy/80 line-through">{oldPrice}</span>
      <span className="mt-[8px] text-[45px] font-semibold leading-[50px] tracking-[-0.03em]">{price}</span>
    </p>
  );
}
