export const AVAILABLE_BOOKS = [
    { slug: "sahih-bukhari", name: "صحيح البخاري" },
    { slug: "sahih-muslim", name: "صحيح مسلم" },
    { slug: "al-tirmidhi", name: "جامع الترمذي" },
    { slug: "sunan-nasai", name: "سنن النسائي" },
    { slug: "abu-dawood", name: "سنن أبي داود" },
    { slug: "ibn-e-majah", name: "سنن ابن ماجه" },
    { slug: "mishkat", name: "مشكاة المصابيح" },
    { slug: "al-adab-al-mufrad", name: "الأدب المفرد" },
    { slug: "musnad-ahmad", name: "مسند أحمد" },
    { slug: "al-silsila-sahiha", name: "السلسلة الصحيحة" }
] as const

export const STATUS_CONFIG = {
    Sahih: { label: "صحيح", css: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    Hasan: { label: "حسن", css: "bg-amber-50 text-amber-700 border-amber-200" },
    "Da`eef": { label: "ضعيف", css: "bg-rose-50 text-rose-700 border-rose-200" }
}