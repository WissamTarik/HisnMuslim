export const POPULAR_SURAHS = [
    { name: "الفاتحة", number: 1 },
    { name: "الكهف", number: 18 },
    { name: "يس", number: 36 },
    { name: "الرحمن", number: 55 },
    { name: "الواقعة", number: 56 },
    { name: "الملك", number: 67 },
]

export const QURAN_THEME: Record<string, { backgroundColor: string; borderColor: string }> = {
    white: {
        backgroundColor: "#ffffff",
        borderColor: "#f1f5f9" // slate-100
    },
    cream: {
        backgroundColor: "rgba(254, 243, 199, 0.4)", // amber-50/40 العتيق للمصاحف
        borderColor: "rgba(233, 223, 204, 0.4)"     // لون البرواز المتناسق معه
    },
    gray: {
        backgroundColor: "#f5f5f4", // stone-100 المريح للعين
        borderColor: "#e7e5e4"     // stone-200
    }
}
