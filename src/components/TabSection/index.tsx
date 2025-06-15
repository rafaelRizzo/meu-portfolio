import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { About } from "./About";
import { Projects } from "./Projects";
import { Career } from "./Career";

export const TabSection = () => {
    return (
        <section className="mt-4">
            <div className="flex w-full flex-col gap-6">
                <Tabs defaultValue="about">
                    <TabsList className="w-full dark:bg-zinc-900">
                        <TabsTrigger value="about">Sobre</TabsTrigger>
                        <TabsTrigger value="projects">Projetos</TabsTrigger>
                        <TabsTrigger value="career">Carreira</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about">
                        <About />
                    </TabsContent>
                    <TabsContent value="projects">
                        <Projects />
                    </TabsContent>
                    <TabsContent value="career">
                        <Career />
                    </TabsContent>
                </Tabs>
            </div>

        </section>
    )
}