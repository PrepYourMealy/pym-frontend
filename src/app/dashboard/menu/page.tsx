"use client";
import {useEffect, useState} from "react";
import {type Menu, type UserModel} from "~/server/domain/types";
import {DashboardNav} from "~/components/feature-common/dashboard-nav";
import {DashboardContent} from "~/components/feature-common/dashboard-content";
import {MenuRegenerationButtonV2} from "~/components/feature-menu/menu-regeneration-button-v2";
import {Button} from "~/components/ui/button";
import Link from "next/link";
import {Separator} from "~/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {RecipeCardSkeleton} from "~/components/feature-home/recipe-card-skeleton";
import {RecipeCard} from "~/components/feature-home/recipe-card";
const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const dayMap: Record<string, string> = {
    mon: "Mo",
    tue: "Di",
    wed: "Mi",
    thu: "Do",
    fri: "Fr",
    sat: "Sa",
    sun: "So",
};

export default function ShoppingListPage() {
    const [isFetching, setIsFetching] = useState(true);
    const [user, setUser] = useState<UserModel | null>(null);
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
                        setIsFetching(false);
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setIsFetching(false);
                    setMenu(data);
                })
        }
        , [])
    const currentDayKey = new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(new Date()).toLowerCase();
    return (
        <>
            <DashboardNav title="Menü">
                <MenuRegenerationButtonV2/>
            </DashboardNav>
            <DashboardContent>
                <>
                    <div className="text-lg py-2 mt-10">Hier ist das Menü für die Woche!</div>
                    <div className="grid grid-cols-2 gap-4 pt-2 pb-4">
                        <Button className="bg-accent text-accent-foreground" asChild>
                            <Link href="/dashboard">Übersicht</Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" asChild>
                            <Link href="/dashboard/list">Einkaufsliste</Link>
                        </Button>
                    </div>
                    <Separator/>

                    <Tabs defaultValue={currentDayKey} className="w-full transition-all">
                        <TabsList className="grid w-full grid-cols-7 mt-2">
                            {Object.entries(dayMap).map(([key, value]) => (
                                <TabsTrigger value={key}>{value}</TabsTrigger>))}

                        </TabsList>
                        {dayKeys.map((key) => (
                            <TabsContent value={key}>
                                {isFetching && <div className="flex flex-col gap-4">
                                    <RecipeCardSkeleton/>
                                    <RecipeCardSkeleton/>
                                    <RecipeCardSkeleton/>
                                </div>}
                                {menu && <div className="flex flex-col gap-4">
                                    <RecipeCard recipe={menu[key]!.breakfast!} mealType="Frühstück" />
                                    <RecipeCard recipe={menu[key]!.lunch!} mealType="Mittagessen" />
                                    <RecipeCard recipe={menu[key]!.dinner!} mealType="Abendessen" />
                                </div>}
                            </TabsContent>
                        ))}
                    </Tabs>
                </>
            </DashboardContent>
        </>
    );

}
