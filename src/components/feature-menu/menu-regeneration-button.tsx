import {Button} from "../ui/button";
import {useEffect, useState} from "react";
import {UserModel} from "~/server/domain/types";
import {useToast} from "~/hooks/use-toast";
import {Skeleton} from "~/components/ui/skeleton";

export function MenuRegenerationButton() {
    const {toast} = useToast()
    const [user, setUser] = useState<UserModel | null>(null);
    const [isRegenerating, setIsRegenerating] = useState(false);
    useEffect(() => {
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
                setUser(data);
            })
    }, []);

    const handleRegenerate = () => {
        if (user!.stats!.weeklyRegenerateRequest < user!.limits!.regenerateRequestsPerWeek) {
            setIsRegenerating(true)
            fetch("/api/menu", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                if (!response.ok) {
                    toast({
                        title: "Fehler bei der Menügenerierung",
                        description: "Das wöchentliche Limit ist überschritten",
                    })
                } else {
                    toast({
                        title: "Menügenerierung gestartet",
                        description: "Das neue Menu sollte in Kürze verfügbar sein",
                    })
                    let userCopy = JSON.parse(JSON.stringify(user))
                    userCopy.stats.weeklyRegenerateRequest++
                    setUser(userCopy)
                }
                setTimeout(() => {
                    setIsRegenerating(false)
                    console.log("Menu regenerated!")
                }, 1000)
            })

        }
    }
    if (user === null) {
        return <Skeleton className="w-48 h-16" />
    }

    return <Button
        onClick={handleRegenerate}
        disabled={isRegenerating || user!.stats!.weeklyRegenerateRequest >= user!.limits!.regenerateRequestsPerWeek}
        className="w-48 h-16 relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800"
    >
        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-16">
            <svg className="w-12 h-12" viewBox="0 0 100 100">
                <circle
                    className="text-gray-600 stroke-current"
                    strokeWidth="8"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                />
                <circle
                    className="progress-ring__circle text-cyan-400 stroke-current transition-all duration-300 ease-in-out"
                    strokeWidth="8"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    transform="rotate(-90 50 50)"
                />
                <text
                    x="50"
                    y="50"
                    fontFamily="sans-serif"
                    fontSize="24"
                    fill="white"
                    textAnchor="middle"
                    alignmentBaseline="central"
                >
                    {user!.limits!.regenerateRequestsPerWeek! - user!.stats!.weeklyRegenerateRequest!}
                </text>
            </svg>
        </div>
        <div className="flex items-center justify-center ml-16">
            <span>Regenerate Menu</span>
        </div>
        <span className="sr-only">
                  {user?.stats?.weeklyRegenerateRequest} out of {user?.limits?.regenerateRequestsPerWeek} regenerations remaining
        </span>
    </Button>
}