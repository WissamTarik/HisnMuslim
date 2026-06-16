import { Metadata } from "next";

export type TLayoutProps={
    children:React.ReactNode,
    modal:React.ReactNode
}
export const metadata: Metadata = {
  title: "الباحث في الحديث النبوي",
  description:
    "ابحث في كتب الحديث النبوي الشريف وتصفح الأحاديث الصحيحة مع خيارات التصفية والبحث المتقدمة.",
};
export default function layout({children,modal}:TLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  )
}
