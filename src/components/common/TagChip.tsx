export default function TagChip({ label }: { readonly label: string }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap leading-none px-2 py-0.5 rounded-full bg-white/8 border border-white/15 text-[11px] md:text-xs text-white/85">
      {label}
    </span>
  )
}


