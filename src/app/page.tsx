import Link from "next/link";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { TabSection } from "@/components/TabSection";

export default function Home() {
    return (
        <div className="max-w-2xl mx-auto p-5 font-mono">

            <Main />

            <TabSection />

            <section className="mt-4">
                <div className="flex items-center justify-center">
                    <Link
                        href="https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <RainbowButton className="mx-auto">Entrar em contato</RainbowButton>
                    </Link>
                </div>
            </section>

            <Footer />

        </div>
    );
}
