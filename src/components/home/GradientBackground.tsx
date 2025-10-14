export default function GradientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animated-gradient absolute -top-1/3 -left-1/3 w-[120vw] h-[120vw] opacity-30" />
      <div className="glow-dot absolute top-24 left-1/4" />
      <div className="glow-dot absolute bottom-24 right-1/5" />
    </div>
  )
}

