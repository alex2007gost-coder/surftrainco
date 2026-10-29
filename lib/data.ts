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

export type Award = {
  label: string;
  title: string;
  organization: string;
  year: number;
  image: string;
};

export type Program = {
  slug: string;
  name: string;
  icon: string;
  courseDuration: string;
  lessonDuration: string;
  features: string[];
  oldPrice: string;
  price: string;
};

export type Promo = {
  term: string;
  title: string;
  image: string;
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
  { name: "Telegram", icon: "/images/icons/telegram.png", href: "https://t.me/+79106849053" },
  { name: "WhatsApp", icon: "/images/icons/whatsapp.png", href: "https://wa.me/79106849053" },
  { name: "Viber", icon: "/images/icons/viber.png", href: "viber://chat?number=%2B79106849053" },
];

export const networks: Social[] = [
  { name: "Instagram", icon: "/images/icons/instagram.png", href: "#" },
  { name: "TikTok", icon: "/images/icons/tiktok.png", href: "#" },
  { name: "ВКонтакте", icon: "/images/icons/vk.png", href: "#" },
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

export const awards: Award[] = [
  {
    label: "Награда",
    title: "«Лучший инструктор\nпо серфингу 2022»",
    organization: "от международной организации\nSurfers Against Sewage (SAS)",
    year: 2022,
    image: "/images/awards/award-2.png",
  },
  {
    label: "Премия",
    title: "«За исключительные\nдостижения в серфинге»",
    organization: "от международной организации\nWorld Surf League (WSL)",
    year: 2022,
    image: "/images/awards/award-3.png",
  },
  {
    label: "Награда",
    title: "«За успешное\nпродвижение серфинга»",
    organization: "от Международного\nОлимпийского Комитета",
    year: 2022,
    image: "/images/awards/award-1.png",
  },
];

export const awardYears = [2022, 2021, 2019];

export const programs: Program[] = [
  {
    slug: "easy-start",
    name: "Easy Start",
    icon: "/images/programs/easy-start.svg",
    courseDuration: "5 уроков",
    lessonDuration: "45 минут",
    features: [
      "Воссозданный искусственный речной порог",
      "Доска с плавниками, как на океане",
      "Даёт возможность отработать технику поворотов, трюки на волне, развить баланс и мышечную память",
      "Помогает подготовиться к катанию на океанских волнах (работа тела после поп-ап)",
    ],
    oldPrice: "29 000 руб.",
    price: "12 990 руб.",
  },
  {
    slug: "flow-rider",
    name: "Flow Rider",
    icon: "/images/programs/flow-rider.svg",
    courseDuration: "5 уроков",
    lessonDuration: "45 минут",
    features: [
      "Напор воды, направленный вверх по натянутой тканевой поверхности",
      "Доска без плавников, нечто среднее между скейтбордом и сноубордом",
      "Даёт возможность развить баланс и получить яркие эмоции от катания на волне",
      "Возможность поймать удовольствие от движения и маневрирования на доске по водному потоку",
    ],
    oldPrice: "22 000 руб.",
    price: "10 990 руб.",
  },
];

export const promos: Promo[] = [
  {
    term: "До 25.04.2024",
    title: "Бесплатный урок серфинга\nдля первого посещения",
    image: "/images/promos/promo-1.png",
  },
  {
    term: "Бессрочно",
    title: "Сертификация или аттестация\nпо окончании курса",
    image: "/images/promos/promo-2.png",
  },
  {
    term: "До 12.05.2024",
    title: "Пакет серфинга\nдля двоих",
    image: "/images/promos/promo-3.png",
  },
];

export const lessonTimes = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];
