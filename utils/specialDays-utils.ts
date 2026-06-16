import { MAJOR_KEYWORDS } from "@/constants/majorSpecialDays";

export function formatEventName(eventName: string): string {
    return eventName
        .replace(/\\u0642| ق| ق$/g, " (قُدِّس سِرُّه)")
        .replace(/\\u0631| ر| ر$/g, " (رضي الله عنه)")
        .replace(/\\ufdfa/g, " ﷺ");
}
export const isMajorEvent = (eventName: string) => MAJOR_KEYWORDS.some((keyword) =>
    eventName.toLowerCase().includes(keyword.toLowerCase()))