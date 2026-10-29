import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import PaperSection from "@/components/PaperSection";
import SectionTitle from "@/components/SectionTitle";

export default function Booking() {
  return (
    <PaperSection id="booking" background="/images/backgrounds/form.svg" className="h-[900px] pt-[108px]">
      <div className="container-main">
        <SectionTitle title="Запись" script="на занятие" as="h1" />

        <div className="mt-[43px] flex justify-between">
          <BookingForm />

          <div className="relative h-[422px] w-[560px] overflow-hidden rounded-[60px]">
            <Image
              src="/images/form-photo.png"
              alt="Девушка в гидрокостюме на берегу"
              fill
              sizes="560px"
              loading="eager"
              className="object-cover object-[78%_50%]"
            />
          </div>
        </div>
      </div>
    </PaperSection>
  );
}
