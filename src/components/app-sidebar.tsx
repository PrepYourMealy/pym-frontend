"use client";

import {
  Percent,
  LifeBuoy,
  List,
  Utensils,
  Send,
  Settings2,
  House,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "./ui/sidebar";
import React from "react";
import {Separator} from "~/components/ui/separator";
const data = {
  navMain: [
    {
      title: "Heute",
      url: "/dashboard",
      icon: House,
    },
    {
      title: "Woche",
      url: "/dashboard/menu",
      icon: Utensils,
    },
    {
      title: "Einkaufsliste",
      url: "/dashboard/list",
      icon: List,
    },
    {
      title: "Rabatte",
      url: "/dashboard/discounts",
      icon: Percent,
    },
    {
      title: "Einstellungen",
      url: "/dashboard/settings",
      icon: Settings2,
    },
  ],

  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="line-clamp-1 flex-1 pr-2 text-xl">Mealy</div>
      </SidebarHeader>
      <Separator className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-1" />
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Aktionen</SidebarLabel>
          <NavMain items={data.navMain} />
        </SidebarItem>
        <SidebarItem className="mt-auto">
          <SidebarLabel>Kontakt</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
      </SidebarContent>
    </Sidebar>
  );
}
