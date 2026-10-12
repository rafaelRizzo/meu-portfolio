import { useState } from "react"
import { motion } from "motion/react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { About } from "./about"
import { Career } from "./career"
import { Projects } from "./projects"

const tabs = [
  { value: "about", label: "Sobre", Content: About },
  { value: "projects", label: "Projetos", Content: Projects },
  { value: "career", label: "Carreira", Content: Career },
] as const

export function TabSection() {
  const [active, setActive] = useState<string>("about")

  return (
    <Tabs value={active} onValueChange={setActive}>
      <TabsList>
        {tabs.map(({ value, label }) => (
          <TabsTrigger key={value} value={value}>
            {label}
            {active === value && (
              <motion.span
                layoutId="tab-underline"
                className="bg-foreground absolute inset-x-0 -bottom-px h-px"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(({ value, Content }) => (
        <TabsContent key={value} value={value}>
          <Content />
        </TabsContent>
      ))}
    </Tabs>
  )
}
