"use client";
import {Button} from "~/components/ui/button";
import {useEffect, useState} from "react";
import {Menu, Recipe} from "~/server/domain/types";
import {MenuDayCard} from "~/components/feature-menu/menu-day-card";

export default function ShoppingListPage() {
    const [menu, setMenu] = useState<Menu | null>(null);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    useEffect(() => {
        fetch("/api/menu", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setMenu(data);
            })
    }, []);

    const regenerateMenu = () => {
        fetch("/api/menu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        })

    }

    if (menu) {
        const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        const dayMap: Record<string, string> = {
            mon: "Montag",
            tue: "Dienstag",
            wed: "Mittwoch",
            thu: "Donnerstag",
            fri: "Freitag",
            sat: "Samstag",
            sun: "Sonntag",
        };

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {dayKeys.map((key) => (
                    <div key={key}>
                       <MenuDayCard day={menu[key]!} dayName={dayMap[key]!} selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} />
                    </div>
                ))}
            </div>
        );
    } else {

        return <div className="flex flex-row gap-2 items-center">
            Kein Menü gefunden
            <Button onClick={regenerateMenu}>
                Neues Menu erstellen
            </Button>
        </div>
            ;
    }

}
