import {SidebarTrigger} from "~/components/ui/sidebar";
import {UserButton} from "@clerk/nextjs";
import React from "react";

interface Props {
    title: string;
    children?: React.ReactNode | React.ReactNode[] | null;
}

export function DashboardNav({title, children}: Props) {
    return <div className="flex w-full flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
            <SidebarTrigger/>
            <h1 className="text-md font-bold">{title}</h1>
        </div>

        <div className="flex flex-row gap-4 items-center">
            {children != null && children}
            <UserButton/>
        </div>
    </div>
}