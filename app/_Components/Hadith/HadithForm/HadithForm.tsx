import HadithSubmitButton from './HadithSubmitBtn'
import { AVAILABLE_BOOKS } from '@/constants/hadith'
import { handleSearchAction } from '@/actions/hadith.actions'
import FilterSelect from './FilterSelect'
type THadithFormProps = {
    currentBook: string,
    currentStatus: string
}
export default function HadithForm({ currentBook, currentStatus }: THadithFormProps) {
    return (
        <>

            <form action={handleSearchAction} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FilterSelect defaultValue={currentBook}
                        name="bookSelectForm"
                        label='اختر الكتاب'
                        options={AVAILABLE_BOOKS.map((b) => ({
                            label: b.name,
                            value: b.slug
                        }))}
                    />
                    <FilterSelect
                        label='درجة صحة الحذيث'
                        name='statusSelectForm'
                        defaultValue={currentStatus}
                        options={[
                            {
                                value: "all",
                                label: "الكل (جميع الأحاديث)",
                            },
                            {
                                value: "Sahih",
                                label: "صحيح",
                            },
                            {
                                value: "Hasan",
                                label: "حسن",
                            },
                            {
                                value: "Da`eef",
                                label: "ضعيف",
                            },
                        ]}
                    />

                </div>

                <HadithSubmitButton />
            </form>
        </>
    )
}
