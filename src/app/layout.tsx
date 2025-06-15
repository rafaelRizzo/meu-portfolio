import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Rafael Rizzo | Desenvolvedor Full Stack",
        template: "%s | Rafael Rizzo",
    },
    description: "Desenvolvedor Full Stack focado em soluções modernas, desempenho e que geram resultados. Veja meus projetos e entre em contato.",
    metadataBase: new URL("https://rafael-rizzo.com"),
    applicationName: "Portfólio de Rafael Rizzo",
    keywords: [
        "portfólio",
        "desenvolvedor web",
        "desenvolvedor backend",
        "desenvolvedor full stack",
        "frontend",
        "asterisk",
        "backend",
        "Nodejs",
        "Next.js",
        "JavaScript",
        "html",
        "css",
        "tailwind",
        "React",
        "Mysql",
        "Postgresql",
        "Redis",
        "desenvolvedor n8n",
        "automações",
        "Issabel PBX",
        "MagnusBilling",
        "programador",
        "desenvolvedor",
        "Rafael Rizzo",
        "rafael rizzo",
        "rafael rizzo dev",
        "rafael rizzo portfolio",
        "rafael rizzo dev full stack",
    ],
    authors: [{ name: "Rafael Rizzo", url: "https://rafael-rizzo.com" }],
    creator: "Rafael Rizzo",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://rafael-rizzo.com",
        siteName: "Portfólio de Rafael Rizzo",
        title: "Desenvolvedor Full Stack | Rafael Rizzo",
        description: "Desenvolvedor Full Stack focado em soluções modernas, desempenho e que geram resultados. Veja meus projetos e entre em contato.",
    },
    icons: {
        icon: "/favicon/favicon.ico",
        shortcut: "/favicon/favicon.ico",
        apple: "/favicon/apple-touch-icon.png",
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
