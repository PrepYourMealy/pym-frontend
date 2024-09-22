"use client"

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { type ShoppingListItem} from "~/server/domain/types";
import {ShoppingListItemView} from "~/components/feature-shoppinglist/shopping-list-item";
import {useState} from "react";
import {Button} from "~/components/ui/button";
import {ChevronDown, ChevronUp} from "lucide-react";


interface Props {
    items: ShoppingListItem[],
    toggleBought: (item: ShoppingListItem) => void
}

export function ShoppingListBought({items, toggleBought}: Props) {
    const [showBought, setShowBought] = useState(false)
    return (
        <Card className="w-full max-w-md mx-auto overflow-hidden">
            <CardHeader className="p-3 bg-gray-200">
                <Button
                    variant="ghost"
                    className="w-full p-0 h-auto font-medium justify-between"
                    onClick={() => setShowBought(!showBought)}
                >
                    <span>Already Bought ({items.length})</span>
                    {items.length > 0 && showBought ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </Button>
            </CardHeader>
            {showBought && items.length > 0 &&<CardContent className="p-1">
                <ul className="divide-y divide-gray-200">
                    {items.map((item, index) => (
                        <ShoppingListItemView key={index} item={item} toggleBought={toggleBought} variant="bought" />))}
                </ul>
            </CardContent>}
        </Card>
    )
}