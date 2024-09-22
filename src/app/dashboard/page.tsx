"use client";
import {DashboardNav} from "~/components/feature-common/dashboard-nav";
import {DashboardContent} from "~/components/feature-common/dashboard-content";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "~/components/ui/tabs";
import {Button} from "~/components/ui/button";
import {Separator} from "~/components/ui/separator";
import {RecipeCard} from "~/components/feature-home/recipe-card";
import {useEffect, useState} from "react";
import {Menu} from "~/server/domain/types";
import {RecipeCardSkeleton} from "~/components/feature-home/recipe-card-skeleton";
import Link from "next/link";
import {RecipeErrorCard} from "~/components/feature-home/recipe-error-card";

function getTimeOfDay(): string {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 3 && hours < 12) {
        return "Morgen"; // Morning: 5 AM - 12 PM
    } else if (hours >= 12 && hours < 17) {
        return "Mittag"; // Midday: 12 PM - 5 PM
    } else {
        return "Abend"; // Evening: 5 PM - 10 PM
    }
}

function getDayMenu(menu: Menu) {
    const shortEnglishDayName = new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(new Date());
    return menu[shortEnglishDayName.toLowerCase()];
}

export default function DashboardHome() {
    const [isFetching, setIsFetching] = useState(true);
    const [menu, setMenu] = useState<Menu | null>(null);
    const [error, setError] = useState<string | null>(null);
    const germanCurrentDayName = new Intl.DateTimeFormat('de-DE', {weekday: 'long'}).format(new Date());
    const germanTimeOfTheDay = getTimeOfDay();
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
                    setError("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setIsFetching(false);
                setMenu(data);
            })
    }, [])
    return <>
        <DashboardNav title="Übersicht">
        </DashboardNav>
        <DashboardContent>
            <>
                <div className="text-2xl pb-2 mt-[50px]">Guten {germanTimeOfTheDay}!</div>
                <div className="text-lg py-2">Für heute sind folgende Gerichte geplant. Viel Spaß beim kochen!</div>
                <div className="grid grid-cols-2 gap-4 pt-2 pb-4">
                    <Button className="bg-accent text-accent-foreground" asChild>
                        <Link href="/dashboard/menu">Wochenmenü</Link>
                    </Button>
                    <Button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" asChild>
                        <Link href="/dashboard/list">Einkaufsliste</Link>
                    </Button>
                </div>
                <Separator/>
                <div className="text-2xl pb-2 pt-10">
                    {germanCurrentDayName}:
                </div>
                <Tabs defaultValue={germanTimeOfTheDay} className="w-full transition-all">
                    <TabsList className="grid w-full grid-cols-3 mt-2">
                        <TabsTrigger value="Morgen">Morgens</TabsTrigger>
                        <TabsTrigger value="Mittag">Mittags</TabsTrigger>
                        <TabsTrigger value="Abend">Abends</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Morgen">
                        {isFetching && <RecipeCardSkeleton/>}
                        {menu && <RecipeCard recipe={getDayMenu(menu)?.breakfast!}/>}
                        {error && <RecipeErrorCard/>}
                    </TabsContent>
                    <TabsContent value="Mittag">
                        {isFetching && <RecipeCardSkeleton/>}
                        {menu && <RecipeCard recipe={getDayMenu(menu)?.lunch!}/>}
                        {error && <RecipeErrorCard/>}
                    </TabsContent>
                    <TabsContent value="Abend">
                        {isFetching && <RecipeCardSkeleton/>}
                        {menu && <RecipeCard recipe={getDayMenu(menu)?.dinner!}/>}
                        {error && <RecipeErrorCard/>}
                    </TabsContent>
                </Tabs>
            </>
        </DashboardContent>

    </>;
}
