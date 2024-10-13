import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Rafael Rizzo - Desenvolvedor Full Stack",
    description: "Rafael Rizzo é um desenvolvedor Full Stack com vasta experiência em tecnologias como Asterisk, Next.js, Node.js, PHP, MySQL e muito mais. Criando soluções web robustas e escaláveis.",
    keywords: "Asterisk, Next.js, Node.js, PHP, MySQL, desenvolvedor full stack, soluções web, desenvolvimento backend, frontend, aplicações escaláveis, web developer, Rafael Rizzo",
    openGraph: {
        title: "Rafael Rizzo - Desenvolvedor Full Stack",
        description: "Desenvolvedor Full Stack especializado em Asterisk, Next.js, Node.js, PHP, MySQL e na criação de soluções web inovadoras.",
        url: "https://www.rafael-rizzo.com",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico", // Caminho para o favicon na pasta public
        shortcut: "/favicon.ico", // Caminho para o atalho
    },
    robots: "index, follow",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
