"use client"

import { TAsmaAlHusnaNames } from "@/types/asmaAlHusna.types"
import AsmaaGridItem from "./AsmaaGridItem"
import { useMemo } from "react"
import { filterAsmaaName } from "@/utils/asmaaAlHussna-utils"
import { Empty } from "../_Components"
import { useSearchParams } from "next/navigation"

type TAsmaaGridProps = {
  names: TAsmaAlHusnaNames[]
}

export default function AsmaaGrid({ names }: TAsmaaGridProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
  const searchLog = query.trim().toLowerCase()

  const filteredNames = useMemo(() => filterAsmaaName(searchLog, names), [searchLog, names])

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground font-medium">
        تم العثور على: {filteredNames.length} اسم
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredNames.map((item) => (
          <AsmaaGridItem {...item} key={item.number} />
        ))}
      </div>

      {filteredNames.length === 0 && (
        <Empty
          title="لا توجد نتائج"
          description="جرّب كلمة بحث أخرى"
        />
      )}
    </div>
  )
}