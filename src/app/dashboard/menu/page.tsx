import {auth} from "@clerk/nextjs/server";
import {MenuDayView} from "~/components/feature-menu/menu-day";

import {Separator} from "~/components/ui/separator";
import {MenuDay} from "~/server/domain/types";
import {env} from "~/env";
import {API, API_VERSION, MENU_ENDPOINT} from "~/server/constants/constants";
import {redirect, RedirectType} from "next/navigation";

export default async function ShoppingListPage() {
  const { userId } = auth();
  if (!userId) {
    console.error("Unauthorized");
    return new Response("Unauthorized", { status: 401 });
  }
  const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const dayMap: Record<string, string> = {
    mon: "Montag",
    tue: "Dienstag",
    wed: "Mittwoch",
    thu: "Donnerstag",
    fri: "Freitag",
    sat: "Samstag",
    sun: "Sonntag",
  };
  try {
    const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${MENU_ENDPOINT}/${userId}`)
    const menu = await response.json();
    if (!menu || !response.ok) {
      return redirect("/on-boarding", RedirectType.replace);
    }
    return (
        <div className="overflow-y-auto">
          <div className="flex justify-between items-center">
            <h1>Menu</h1>

          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {dayKeys.map((dayKey) => (
                <MenuDayView day={dayMap[dayKey]!} menu={menu![dayKey] as MenuDay} />

            ))}

          </div>
        </div>
    );
  } catch (_e) {
    return <div>Kein Menü gefunden</div>;
  }

}
