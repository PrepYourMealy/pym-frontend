"use client";
import {Button} from "~/components/ui/button";
import {useEffect, useState} from "react";
import {Menu, Recipe} from "~/server/domain/types";
import {MenuDayCard} from "~/components/feature-menu/menu-day-card";
import {MenuCardSkeleton} from "~/components/feature-menu/menu-card-skeleton";

export default function ShoppingListPage() {
    const [isFetching, setIsFetching] = useState(true);
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
                    setIsFetching(false);
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setIsFetching(false);
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
        <div>
            <div className="flex flex-row-reverse items-center py-2">
                {!menu && <div>Kein Menü gefunden</div>}
                <Button onClick={regenerateMenu}>
                    Neu generieren
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {menu && dayKeys.map((key) => (
                    <div key={key}>
                        <MenuDayCard day={menu[key]!} dayName={dayMap[key]!} selectedRecipe={selectedRecipe}
                                     setSelectedRecipe={setSelectedRecipe}/>
                    </div>
                ))}
                {isFetching && [...Array(6)].map((_, index) => <div key={index}><MenuCardSkeleton/></div>)}
            </div>
        </div>
    );

}
