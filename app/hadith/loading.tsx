export default function HadithLoading() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 max-w-3xl mx-auto space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="text-right border-b pb-4 border-slate-200">
        <div className="h-8 bg-slate-200 rounded-md w-48 mr-0 ml-auto mb-2"></div>
        <div className="h-4 bg-slate-200 rounded-md w-64 mr-0 ml-auto"></div>
      </div>

      {/* Form Skeleton */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="h-10 bg-slate-100 rounded-lg w-full"></div>
          <div className="h-10 bg-slate-100 rounded-lg w-full"></div>
        </div>
        <div className="h-10 bg-slate-200 rounded-lg w-full"></div>
      </div>

      {/* Cards Skeleton */}
      <div className="space-y-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-white rounded-xl border border-slate-200 h-48 p-6 space-y-4">
            <div className="h-6 bg-slate-100 rounded w-1/3"></div>
            <div className="h-4 bg-slate-100 rounded w-1/4"></div>
            <div className="space-y-2 pt-2">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}