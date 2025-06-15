import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export const About = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sobre</CardTitle>
                <CardDescription>
                    Um pouco sobre mim
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 text-xs">
                <p>8 anos de experiência e 4 anos de mercado, atuando desde os 17 anos.</p>
                <p>Expecialista em desenvolvimento de sistemas web, landing pages, API RESTful, automações e muito mais.</p>
                <p>Minha missão: fazer o difícil parecer simples.</p>
            </CardContent>
        </Card>
    )
}