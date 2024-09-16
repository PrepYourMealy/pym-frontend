import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "~/components/ui/tooltip";
import {Button} from "~/components/ui/button";
import {useToast} from "~/hooks/use-toast";
import {useEffect, useState} from "react";
import {UserModel} from "~/server/domain/types";
import {Skeleton} from "~/components/ui/skeleton";

export function MenuRegenerationButtonV2() {
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
                    const progressBar = document.querySelector('.progress-ring__circle') as SVGCircleElement | null
                    if (progressBar) {
                        const circumference = progressBar.r.baseVal.value * 2 * Math.PI
                        progressBar.style.strokeDasharray = `${circumference} ${circumference}`
                        progressBar.style.strokeDashoffset = `${circumference - (userCopy.stats!.weeklyRegenerateRequest! / userCopy.limits!.regenerateRequestsPerWeek!) * circumference}`
                    }
                }
                setTimeout(() => {
                    setIsRegenerating(false)
                    console.log("Menu regenerated!")
                }, 1000)
            })

        }
    }
    if (user) {
        return <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="relative flex justify-end">
                        <Button
                            onClick={handleRegenerate}
                            disabled={isRegenerating || user.stats!.weeklyRegenerateRequest! >= user.limits!.regenerateRequestsPerWeek!}
                            className="group w-8 h-8 rounded-full overflow-hidden transition-all duration-300 ease-in-out flex items-center justify-center hover:w-[170px] hover:justify-start hover:pl-3 hover:rounded-full hover:bg-gray-100 hover:border hover:border-gray-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                  <span
                      className="absolute opacity-0 transition-opacity duration-300 whitespace-nowrap group-hover:opacity-100 text-gray-800">
                   Neu generieren
                  </span>
                            <div className="flex-shrink-0 w-8 h-8">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        className="text-gray-200 stroke-current"
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
                                        className="hover:text-gray-800 text-white"
                                        fontFamily="sans-serif"
                                        fontSize="24"
                                        textAnchor="middle"
                                        alignmentBaseline="central"
                                    >
                                        {user.limits?.regenerateRequestsPerWeek! - user.stats?.weeklyRegenerateRequest!}
                                    </text>
                                </svg>
                            </div>
                        </Button>
                        <span className="sr-only">
                  {user.stats?.weeklyRegenerateRequest!} von {user.limits?.regenerateRequestsPerWeek!} Neugenerierungen möglich. Klicke um die Regenierung zu starten.
                </span>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{user.stats?.weeklyRegenerateRequest!}/{user.limits?.regenerateRequestsPerWeek!} Neugenerierungen
                        möglich</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    } else {
        return <Skeleton className="w-14 h-14 border-r-[50%]"/>
    }
}