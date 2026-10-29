import type { Metadata } from "next";
import "@fontsource/onest/400.css";
import "@fontsource/onest/500.css";
import "@fontsource/onest/600.css";
import "@fontsource/onest/700.css";
import "@fontsource/onest/800.css";
import "@fontsource/marck-script/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SurfTrainCo — школа серфинга в Москве",
  description: "Доступное, комплексное и приятное обучение серфингу для всех уровней навыков и возрастов.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body id="top" className="relative overflow-x-clip antialiased">
        <main className="pb-[120px]">{children}</main>
      </body>
    </html>
  );
}
