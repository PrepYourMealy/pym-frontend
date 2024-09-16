import {Skeleton} from "~/components/ui/skeleton";

export function MenuCardSkeleton() {
    return (<div className="border rounded-lg p-4 space-y-4">
        <Skeleton className="h-6 w-24"/>
        {[...Array(3)].map((_, mealIndex) => (
            <div key={mealIndex} className="space-y-2">
                <Skeleton className="h-4 w-3/4"/>
                <Skeleton className="h-4 w-1/4"/>
                <Skeleton className="h-8 w-full"/>
            </div>
        ))}
    </div>)
}