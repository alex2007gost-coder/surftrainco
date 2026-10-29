import Booking from "@/components/Booking";
import MapSection from "@/components/MapSection";

export default function ContactsPage() {
  return (
    <div className="pt-[110px]">
      {/* Запись на занятие */}
      <Booking />

      {/* Мы на карте */}
      <MapSection />
    </div>
  );
}
