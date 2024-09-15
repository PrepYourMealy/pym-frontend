"use client";
import {MenuDayView} from "~/components/feature-menu/menu-day";

import {Separator} from "~/components/ui/separator";
import {Menu, MenuDay} from "~/server/domain/types";
import {Button} from "~/components/ui/button";
import {useEffect, useState} from "react";

export default function ShoppingListPage() {
    const [menu, setMenu] = useState<Menu | null>(null);
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
                console.log(response)
                return response.json();
            })
            .then((data) => {
                console.log(data);
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
            <div className="overflow-y-auto">
                <div className="flex justify-between items-center">
                    <h1>Menu</h1>

                </div>
                <Separator/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {dayKeys.map((dayKey) => (
                        <MenuDayView day={dayMap[dayKey]!} menu={menu![dayKey] as unknown as MenuDay}/>
                    ))}

                </div>
            </div>
        );
    } else {

        return <div className="flex flex-row gap-2 items-center">
            Kein Menü gefunden
            <Button onClick={regenerateMenu}>
                Neues Menu erstellen
            </Button>
        </div>;
    }

}
