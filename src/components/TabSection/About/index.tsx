"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export const About = () => {
    const currentYear = new Date().getFullYear()
    const totalExp = currentYear - 2017
    const marketExp = currentYear - 2021

    return (
        <Card>
            <CardHeader>
                <CardTitle>Sobre</CardTitle>
                <CardDescription>Um pouco sobre mim</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 text-xs">
                <p>{totalExp} anos de experiência e {marketExp} anos de mercado, atuando desde os 17 anos.</p>
                <p>Especialista em desenvolvimento de sistemas web, landing pages, API RESTful, automações e muito mais.</p>
                <p>Minha missão: fazer o difícil parecer simples.</p>
            </CardContent>
        </Card>
    )
}