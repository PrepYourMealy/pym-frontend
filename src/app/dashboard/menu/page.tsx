"use client";
import {useEffect, useState} from "react";
import {Menu, Recipe, UserModel} from "~/server/domain/types";
import {MenuDayCard} from "~/components/feature-menu/menu-day-card";
import {MenuCardSkeleton} from "~/components/feature-menu/menu-card-skeleton";
import {DashboardNav} from "~/components/feature-common/dashboard-nav";
import {DashboardContent} from "~/components/feature-common/dashboard-content";
import {MenuRegenerationButtonV2} from "~/components/feature-menu/menu-regeneration-button-v2";
import {LlmPrompt} from "~/components/feature-menu/llm-prompt";

export default function ShoppingListPage() {
    const [isFetching, setIsFetching] = useState(true);
    const [availableRegenerations, setAvailableRegenerations] = useState(0);
    const [user, setUser] = useState<UserModel | null>(null);
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
        fetch("/api/user", {
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
                setAvailableRegenerations(data.limits.regenerateRequestsPerWeek - data.stats.weeklyRegenerateRequest);
                setUser(data);
            })
    }, []);

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
        <>
            <DashboardNav title="Menü">
                <MenuRegenerationButtonV2/>
            </DashboardNav>
            <DashboardContent>
                <div className="flex flex-col h-full">
                    <div className="overflow-y-auto flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
                            {menu && dayKeys.map((key) => (
                                <div key={key}>
                                    <MenuDayCard
                                        day={menu[key]!}
                                        dayName={dayMap[key]!}
                                        selectedRecipe={selectedRecipe}
                                        setSelectedRecipe={setSelectedRecipe}
                                    />
                                </div>
                            ))}
                            {isFetching && [...Array(6)].map((_, index) => (
                                <div key={index}><MenuCardSkeleton/></div>
                            ))}
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                    <LlmPrompt/>
                </div>
            </DashboardContent>
        </>
    );

}
