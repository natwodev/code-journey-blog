export default function TechStack() {
  const items = [
    { name: 'Java' },
    { name: 'JavaScript' },
    { name: 'React' },
  ]
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-poppins font-semibold">Tech Stack</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map(i => (
          <span key={i.name} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{i.name}</span>
        ))}
      </div>
    </section>
  )
}

