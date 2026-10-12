import { BlurFade } from "@/components/magicui/blur-fade"
import { profile } from "@/data/profile"

export function About() {
  const year = new Date().getFullYear()
  const stats = [
    { value: year - profile.startedWorkingYear, label: "anos de experiência" },
    { value: year - profile.marketYear, label: "anos de mercado" },
  ]
  const [intro, mission] = profile.summary

  return (
    <div className="space-y-8">
      <BlurFade className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border px-4 py-3">
            <p className="text-3xl font-semibold tracking-tight">{stat.value}+</p>
            <p className="text-muted-foreground mt-1 text-xs">{stat.label}</p>
          </div>
        ))}
      </BlurFade>

      <BlurFade delay={0.08} className="space-y-4 text-sm leading-relaxed">
        <p className="text-muted-foreground">Atuando desde {profile.startedWorkingYear}.</p>
        <p>{intro}</p>
        <p className="border-l-2 pl-4 font-medium">{mission}</p>
      </BlurFade>
    </div>
  )
}
