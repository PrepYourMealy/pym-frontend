import React from "react";

interface Props {
    children: React.ReactNode;
}

export function DashboardContent({children}: Props) {
    return (
        <main className="p-2 mt-2 overflow-y-auto">
            {children}
        </main>
    );
}