export type NavLink = {
  label: string;
  href: string;
};

export type Social = {
  name: string;
  icon: string;
  href: string;
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
