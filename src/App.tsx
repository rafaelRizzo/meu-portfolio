import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { TabSection } from "@/components/sections/tab-section"

export default function App() {
  return (
    <div className="mx-auto flex min-h-svh max-w-2xl flex-col gap-10 px-5 py-12 sm:py-16">
      <Header />
      <main className="flex-1">
        <TabSection />
      </main>
      <Footer />
    </div>
  )
}
