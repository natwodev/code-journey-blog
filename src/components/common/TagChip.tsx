export default function TagChip({ label }: { readonly label: string }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap leading-none px-2 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-[11px] md:text-xs text-brand-cyan/90">
      {label}
    </span>
  )
}


