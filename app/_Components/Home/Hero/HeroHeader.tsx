
export default function HeroHeader() {
  return (
    <>
       <div className="absolute inset-0 bg-linear-to-br from-emerald-950 via-emerald-900 to-teal-900" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 text-4xl md:text-5xl leading-loose text-center overflow-hidden select-none">
            {Array(40).fill("۞ ﷽ ۞").join(" ")}
          </div>
        </div>

        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-400/20 blur-3xl rounded-full" />
    </>
  )
}
