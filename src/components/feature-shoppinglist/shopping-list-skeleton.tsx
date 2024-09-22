import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Skeleton } from "~/components/ui/skeleton"

export function ShoppingListSkeleton() {
    return (
        <div className="flex flex-col gap-3 mb-[80px]">
            <Card className="w-full max-w-md mx-auto overflow-hidden">
                <CardHeader className="p-3 bg-gray-200">
                   <Skeleton className="h-5 w-1/4"/>
                </CardHeader>
            </Card>
            <Card className="w-full max-w-md mx-auto overflow-hidden">
                <CardHeader className="border-b bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-3">
                    <Skeleton className="h-6 w-1/4 bg-white/20" />
                </CardHeader>
                <CardContent className="space-y-6 p-1">
                    <ul className="divide-y divide-gray-200">
                        {[...Array(10)].map((_, index) => (
                            <li key={index} className="p-3 flex items-center justify-between">
                                <div className="flex-1">
                                    <Skeleton className="h-4 w-1/2"/>
                                    <Skeleton className="h-4 w-1/4 mt-2"/>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-4 w-1/4"/>
                                    <Skeleton className="h-4 w-1/4"/>
                                </div>
                            </li>
                        ))}

                    </ul>
                </CardContent>
            </Card>
        </div>

    )
}