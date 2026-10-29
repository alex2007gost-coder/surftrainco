export type NavLink = {
  label: string;
  href: string;
};

export type Social = {
  name: string;
  icon: string;
  href: string;
};

export type Advantage = {
  title: string;
  text: string;
  image: string;
  badge: string;
  dark: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/#about" },
  { label: "Награды", href: "/#awards" },
  { label: "Тарифы", href: "/programs" },
  { label: "Акции", href: "/programs#promos" },
  { label: "Запись", href: "/contacts#booking" },
  { label: "Контакты", href: "/contacts" },
];

export const footerLinks: NavLink[] = [
  { label: "О нас", href: "/#about" },
  { label: "Награды", href: "/#awards" },
  { label: "Тарифы", href: "/programs" },
  { label: "Акции", href: "/programs#promos" },
  { label: "Контакты", href: "/contacts" },
];

export const contacts = {
  phone: "+7 (910) 684-90-53",
  phoneHref: "tel:+79106849053",
  email: "SurfCocommerce@yandex.ru",
  address: "г. Москва, ул. Черкизова 14",
  street: "ул. Черкизова 14, Москва",
  hours: "Работаем с 8:00-22:00",
  routes: "Маршруты: 139, 28б",
};

export const messengers: Social[] = [
  { name: "Telegram", icon: "/images/icons/telegram.png", href: "#" },
  { name: "WhatsApp", icon: "/images/icons/whatsapp.png", href: "#" },
  { name: "Viber", icon: "/images/icons/viber.png", href: "#" },
];

export const advantages: Advantage[] = [
  {
    title: "Профессиональное руководство",
    text: "опытные инструкторы помогут\nвам освоить основы и быстро\nсовершенствоваться.",
    image: "/images/advantages/photo-1.png",
    badge: "/images/advantages/badge-1.svg",
    dark: true,
  },
  {
    title: "Качественное оборудование",
    text: "доски и гидрокостюмы помогут\nвам оставаться в безопасности\nи получать удовольствие.",
    image: "/images/advantages/photo-2.png",
    badge: "/images/advantages/badge-2.svg",
    dark: false,
  },
  {
    title: "Благоприятная обстановка",
    text: "благоприятная и безопасная\nобстановка в обучении с людьми\nсо схожим опытом и целями.",
    image: "/images/advantages/photo-3.png",
    badge: "/images/advantages/badge-3.svg",
    dark: true,
  },
  {
    title: "Дополнительные услуги",
    text: "услуги фотографий и видео помогут\nвам запечатлить и поделиться\nопытом серфинга.",
    image: "/images/advantages/photo-4.png",
    badge: "/images/advantages/badge-4.svg",
    dark: false,
  },
];
