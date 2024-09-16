import {SidebarTrigger} from "~/components/ui/sidebar";
import {UserButton} from "@clerk/nextjs";

interface Props {
    title: string;
}

export function DashboardNav({title}: Props) {
    return <div className="flex w-full flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
            <SidebarTrigger/>
            <h1 className="text-md font-bold">{title}</h1>
        </div>

        <div className="flex flex-row gap-4 items-center">
            <UserButton/>
        </div>
    </div>
}