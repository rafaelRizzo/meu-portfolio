"use client";
import * as React from "react"

import { ModeToggle } from "./ModeToggle";
import { ListOfTecnologies } from "./ListOfTecnologies";

export const Main = () => {
    return (
        <main>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg">./rafael rizzo</h1>
                    <h2 className="text-sm text-muted-foreground">full-stack developer</h2>
                </div>
                <ModeToggle />
            </div>

            <ListOfTecnologies />
        </main>
    )
}