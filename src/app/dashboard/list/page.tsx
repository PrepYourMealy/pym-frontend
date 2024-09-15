"use client";

import {ShoppingItem, ShoppingList} from "~/components/feature-menu/shopping-list";
import {Separator} from "~/components/ui/separator";
import {useEffect, useState} from "react";

export default function ShoppingListPage() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch("/api/list", {
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
                setList(data);
            })
    }, []);
    if (!list || list.length === 0) {
        return <div>Kein Einkaufsliste gefunden</div>;
    }
    return (
        <div className="overflow-y-auto">
            <h1>Einkaufsliste</h1>
            <Separator/>
            <div className="flex w-full flex-row items-center justify-center pt-4">
                <ShoppingList list={list as unknown as {
                    total: number;
                    items: ShoppingItem[];
                }}/>
            </div>
        </div>);


}
