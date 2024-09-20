import {SignedIn, UserButton} from "@clerk/nextjs";
import {cookies} from "next/headers";
import {type ReactNode} from "react";
import {AppSidebar} from "~/components/app-sidebar";
import {SidebarLayout, SidebarTrigger} from "~/components/ui/sidebar";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <SignedIn>
            <SidebarLayout
                defaultOpen={cookies().get("sidebar:state")?.value === "true"}
            >
                <AppSidebar/>
                <main className="flex flex-1 flex-col transition-all duration-300 ease-in-out">
                    <div className="h-full">
                        {children}
                    </div>
                </main>
            </SidebarLayout>
        </SignedIn>
    );
}
