import {Separator} from "~/components/ui/separator";
import React from "react";

interface Props {
    total: number;
    totalItems: number;
}

export function ShoppingListBottom({ total, totalItems }: Props) {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
            <Separator className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-1" />
            <div className="max-w-lg mx-auto px-4 py-3 flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-600">Anzahl Zutaten: {totalItems}</p>
                    <p className="font-semibold">Gesamt: {Math.round((total + Number.EPSILON) * 100) / 100}€</p>
                </div>
            </div>
        </div>
    )
}