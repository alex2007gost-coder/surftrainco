"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import { lessonTimes, programs } from "@/lib/data";

type Option = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  name: string;
  placeholder: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
};

function SelectField({ name, placeholder, value, options, onChange, className = "" }: SelectFieldProps) {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">{placeholder}</span>
      <select
        name={name}
        value={value}
        required
        onChange={(event) => onChange(event.target.value)}
        className="h-[85px] w-full cursor-pointer appearance-none rounded-full border border-navy/40 bg-white pl-[30px] pr-[70px] outline-none focus:border-navy"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Image
        src="/images/icons/chevron.svg"
        alt=""
        width={19}
        height={10}
        className="pointer-events-none absolute right-[37px] top-1/2 -translate-y-1/2"
      />
    </label>
  );
}

const inputClass =
  "h-[85px] w-full rounded-full border border-navy/40 bg-white px-[30px] outline-none placeholder:text-navy/80 focus:border-navy";

const initialForm = { date: "", time: "", tariff: "", name: "", phone: "" };

const subscribe = () => () => {};
const getToday = () => new Date().toDateString();
const getServerToday = () => "";

function getNextDays(today: string): Option[] {
  if (!today) {
    return [];
  }

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(date.getDate() + index + 1);
    return {
      value: date.toLocaleDateString("ru-RU"),
      label: date.toLocaleDateString("ru-RU", { weekday: "short", day: "numeric", month: "long" }),
    };
  });
}

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [isSent, setIsSent] = useState(false);
  const today = useSyncExternalStore(subscribe, getToday, getServerToday);
  const dates = getNextDays(today);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setIsSent(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[655px]">
      <div className="grid grid-cols-2 gap-x-[20px] gap-y-[30px]">
        <SelectField
          name="date"
          placeholder="Выберите дату"
          value={form.date}
          options={dates}
          onChange={(value) => updateField("date", value)}
        />
        <SelectField
          name="time"
          placeholder="Выберите время"
          value={form.time}
          options={lessonTimes.map((time) => ({ value: time, label: time }))}
          onChange={(value) => updateField("time", value)}
        />
        <SelectField
          name="tariff"
          placeholder="Выберите подходящий тариф"
          value={form.tariff}
          options={programs.map((program) => ({ value: program.slug, label: program.name }))}
          onChange={(value) => updateField("tariff", value)}
          className="col-span-2"
        />
        <input
          name="name"
          type="text"
          required
          placeholder="Иванов Иван"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className={inputClass}
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="8(999) 999-99-99"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className={inputClass}
        />
      </div>

      <div className="mt-[30px] flex items-center gap-[60px]">
        <button
          type="submit"
          className="h-[77px] w-[336px] shrink-0 cursor-pointer rounded-full bg-brand-gradient text-[22px] font-bold text-white transition-opacity hover:opacity-90"
        >
          Записаться онлайн
        </button>

        {isSent ? (
          <p role="status" className="text-[14px] leading-[18px] text-navy">
            Спасибо, {form.name}! Мы перезвоним по номеру {form.phone}, чтобы подтвердить запись.
          </p>
        ) : (
          <p className="text-[14px] leading-[18px]">
            Нажимая на кнопку, вы соглашаетесь <span className="block text-brand">с политикой обработки данных</span>
          </p>
        )}
      </div>
    </form>
  );
}
