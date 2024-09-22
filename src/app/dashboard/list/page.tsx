"use client";

import {useEffect, useState} from "react";
import {DashboardNav} from "~/components/feature-common/dashboard-nav";
import {DashboardContent} from "~/components/feature-common/dashboard-content";
import {ShoppingListBottom} from "~/components/feature-shoppinglist/shopping-list-bottom";
import {ShoppingListOpen} from "~/components/feature-shoppinglist/shopping-list-open";
import {type ShoppingList, type ShoppingListItem} from "~/server/domain/types";
import {ShoppingListBought} from "~/components/feature-shoppinglist/shopping-list-bought";
import {ShoppingListSkeleton} from "~/components/feature-shoppinglist/shopping-list-skeleton";
import {ShoppingListBottomSkeleton} from "~/components/feature-shoppinglist/shopping-list-bottom-skeleton";
import {ShoppingListError} from "~/components/feature-shoppinglist/shopping-list-error";

export default function ShoppingListPage() {
    const [list, setList] = useState<ShoppingList | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        fetch("/api/list", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    setIsFetching(false);
                    setError(true);
                }
                return response.json();
            })
            .then((data) => {
                setIsFetching(false);
                setList(data);
            })
    }, []);

    const updateList = () => {
        fetch("/api/list", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(list),
        })
            .then(() => {
                console.log("Updated list");
            })
    }

    const toggleBought = (item: ShoppingListItem) => {
        if (!list) {
            return
        }
        const listCopy: ShoppingList = JSON.parse(JSON.stringify(list)) as unknown as ShoppingList;
        listCopy.items = listCopy.items.map((i) => {
            if (JSON.stringify(i) === JSON.stringify(item)) {
                i.bought = !i.bought;
            }
            return i;
        });
        setList(listCopy);
        updateList();
    }

    return (
        <div className="overflow-y-auto">
            <DashboardNav title="Einkaufsliste"/>
            <DashboardContent>
                <div className="flex flex-col h-full mt-[50px]">
                    {error && <ShoppingListError/>}
                    {isFetching && <ShoppingListSkeleton/>}
                    {!error && list && <div className="flex flex-col gap-3 mb-[80px]">
                        <ShoppingListBought items={list.items.filter(item => item.bought)} toggleBought={toggleBought}/>
                        <ShoppingListOpen items={list.items.filter(item => !item.bought)} toggleBought={toggleBought}/>
                    </div>}
                    {!error && list && <ShoppingListBottom total={list.total} totalItems={list.items.length}/>}
                    {isFetching && <ShoppingListBottomSkeleton/>}
                </div>
            </DashboardContent>
        </div>);


}
