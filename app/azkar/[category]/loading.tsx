import ShadcnSkeleton from "@/skeletons/ShadcnSkeleton/ShadcnSkeleton";

export default function AzkarCategoriesLoading() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-3 animate-pulse">
        <div className="h-10 w-48 bg-slate-200 dark:bg-slate-800 rounded-md mx-auto" />
        <div className="h-5 w-80 bg-slate-100 dark:bg-slate-900 rounded-md mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto">
        <ShadcnSkeleton variant="card" count={3} />
      </div>
    </div>
  );
}