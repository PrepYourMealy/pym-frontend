import {Separator} from "~/components/ui/separator";
import React from "react";
import {Skeleton} from "~/components/ui/skeleton";


export function ShoppingListBottomSkeleton() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
            <Separator className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-1" />
            <div className="max-w-lg mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex flex-col gap-2 w-full h-full">
                    <Skeleton className="h-4 w-1/4"/>
                    <Skeleton className="h-4 w-1/4"/>
                </div>
            </div>
        </div>
    )
}