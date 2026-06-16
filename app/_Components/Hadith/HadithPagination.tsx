import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { createPageUrl } from '@/utils/hadith-utils'

type THadithPaginationProps = {
    currentPage: number,
    length: number,
    currentBook: string,
    currentStatus: string,
    currentQuery: string
}

export default function HadithPagination({ currentPage, length, currentBook, currentQuery, currentStatus }: THadithPaginationProps) {
    const handleCreatePageUrl = (page: number) => createPageUrl(page, currentBook, currentStatus, currentQuery)
    
    return (
        <div className="pt-6 border-t border-slate-200" dir="rtl">
            <Pagination>
                <PaginationContent className="flex items-center justify-between w-full font-serif gap-1.5">
                    
                    <PaginationItem>
                        {currentPage > 1 ? (
                            <PaginationPrevious 
                                href={handleCreatePageUrl(currentPage - 1)}
                                className="border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-xs font-serif"
                            />
                        ) : (
                            <span className="text-sm text-slate-300 pointer-events-none px-3 py-2 border border-dashed rounded-lg opacity-50 font-sans">السابق</span>
                        )}
                    </PaginationItem>

                    {/* الترقيم الرقمي المستند إلى الشروط بدون دمجهم داخل div مخترق لبنية الـ ul */}
                    {currentPage > 1 && (
                        <PaginationItem className="font-sans">
                            <PaginationLink href={handleCreatePageUrl(currentPage - 1)}>
                                {currentPage - 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}
                    
                    <PaginationItem className="font-sans">
                        <PaginationLink href={handleCreatePageUrl(currentPage)} isActive className="bg-emerald-600 hover:bg-emerald-700 hover:text-white text-white border-emerald-600">
                            {currentPage}
                        </PaginationLink>
                    </PaginationItem>

                    {length === 20 && (
                        <PaginationItem className="font-sans">
                            <PaginationLink href={handleCreatePageUrl(currentPage + 1)}>
                                {currentPage + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem>
                        {length === 20 ? (
                            <PaginationNext 
                                href={handleCreatePageUrl(currentPage + 1)}
                                className="border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-xs font-serif"
                            />
                        ) : (
                            <span className="text-sm text-slate-300 pointer-events-none px-3 py-2 border border-dashed rounded-lg opacity-50 font-sans">التالي</span>
                        )}
                    </PaginationItem>

                </PaginationContent>
            </Pagination>
        </div>
    )
}