import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Skeleton } from "~/components/ui/skeleton"

export function RecipeCardSkeleton() {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-6 space-y-4 rounded-lg">
                <Skeleton className="h-8 w-3/4 bg-white/20" />
                <Skeleton className="h-4 w-full bg-white/20" />
                <div className="flex space-x-2">
                    <Skeleton className="h-6 w-20 rounded-full bg-white/20" />
                    <Skeleton className="h-6 w-20 rounded-full bg-white/20" />
                    <Skeleton className="h-6 w-20 rounded-full bg-white/20" />
                </div>
                <div className="flex justify-between">
                    <Skeleton className="h-4 w-16 bg-white/20" />
                    <Skeleton className="h-4 w-24 bg-white/20" />
                </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </CardContent>
        </Card>
    )
}