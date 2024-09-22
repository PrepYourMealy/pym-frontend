"use client"

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { type ShoppingListItem} from "~/server/domain/types";
import {ShoppingListItemView} from "~/components/feature-shoppinglist/shopping-list-item";


interface Props {
    items: ShoppingListItem[],
    toggleBought: (item: ShoppingListItem) => void
}

export function ShoppingListOpen({items, toggleBought}: Props) {

    return (
        <Card className="w-full max-w-md mx-auto overflow-hidden">
            <CardHeader className="border-b bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-3">
                <CardTitle className="text-lg">Zu Kaufen ({items.length})</CardTitle>
            </CardHeader>
            <CardContent className="p-1">
                <ul className="divide-y divide-gray-200">
                    {items.length > 0 && items.map((item, index) => (
                        <ShoppingListItemView key={index} item={item} toggleBought={toggleBought} variant="normal" />))}
                    {items.length === 0 && <li className="p-3 text-center">Keine Zutaten auf der Einkaufsliste</li>}
                </ul>
            </CardContent>
        </Card>
)
}