import { LucideIconType } from "@/app/_types/lucideIcon.types";
import { Moon, Sun, Sunrise, Sunset } from "lucide-react";

export interface TPrayerConstant {
  key: "Fajr" | "Sunrise" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";
  label: string;
  icon: LucideIconType;
  iconStyle: string;
}

export const PRAYERS_CONFIG: TPrayerConstant[] = [
  { key: "Fajr", label: "الفجر", icon: Moon, iconStyle: "text-slate-500" },
  { key: "Sunrise", label: "الشروق", icon: Sunrise, iconStyle: "text-amber-500" },
  { key: "Dhuhr", label: "الظهر", icon: Sun, iconStyle: "text-orange-500" },
  { key: "Asr", label: "العصر", icon: Sun, iconStyle: "text-amber-600" },
  { key: "Maghrib", label: "المغرب", icon: Sunset, iconStyle: "text-purple-500" },
  { key: "Isha", label: "العشاء", icon: Moon, iconStyle: "text-indigo-600" },
];