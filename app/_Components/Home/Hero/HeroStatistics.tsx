import React from 'react'

export default function HeroStatistics() {
  return (
    <>
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-black text-white">114</p>
                  <p className="text-xs text-emerald-100/70">سورة</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-black text-white">99</p>
                  <p className="text-xs text-emerald-100/70"> اسماًء لله الحسني</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-black text-white">100+</p>
                  <p className="text-xs text-emerald-100/70">ذكر ودعاء</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-black text-white">5</p>
                  <p className="text-xs text-emerald-100/70">صلوات يومية</p>
                </div>
              </div>
    </>
  )
}
