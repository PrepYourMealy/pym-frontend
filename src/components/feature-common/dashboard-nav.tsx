import {SidebarTrigger} from "~/components/ui/sidebar";
import {UserButton} from "@clerk/nextjs";
import React from "react";
import {Separator} from "~/components/ui/separator";

interface Props {
    title: string;
    children?: React.ReactNode | React.ReactNode[] | null;
}

export function DashboardNav({title, children}: Props) {
    return <div className="sticky top-0 z-50 bg-background ">
        <div className="relative left-0 right-0 flex w-full flex-row justify-between items-center p-2">
            <div className="flex flex-row gap-2 items-center">
                <SidebarTrigger/>
                <h1 className="text-md">{title}</h1>
            </div>

            <div className="flex flex-row gap-4 items-center">
                {children != null && children}
                <UserButton/>
            </div>
        </div>
        <Separator className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-1" />
    </div>
}