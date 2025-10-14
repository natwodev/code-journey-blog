export default function FullPageGradient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animated-gradient absolute -top-1/2 -left-1/3 w-[140vw] h-[140vw] opacity-25" />
      <div className="animated-gradient absolute -bottom-1/2 -right-1/3 w-[140vw] h-[140vw] opacity-15 animation-delay-7000" />
      <div className="glow-dot absolute top-28 left-1/5 opacity-60" />
      <div className="glow-dot absolute bottom-28 right-1/4 opacity-50" />
    </div>
  )
}

