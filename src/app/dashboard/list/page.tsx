import { auth } from "@clerk/nextjs/server";
import { ShoppingList } from "~/components/feature-menu/shopping-list";
import { Separator } from "~/components/ui/separator";
import {env} from "~/env";
import {API, API_VERSION, LIST_ENDPOINT} from "~/server/constants/constants";
import {redirect, RedirectType} from "next/navigation";

export default async function ShoppingListPage() {
  const { userId } = auth();
  if (!userId) {
    console.error("Unauthorized");
    return new Response("Unauthorized", { status: 401 });
  }
  try {
      const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${LIST_ENDPOINT}/${userId}`)
      const data = await response.json();
      if (!data || !response.ok) {
          return redirect("/on-boarding", RedirectType.replace);
      }
      return (
          <div className="overflow-y-auto">
              <h1>Einkaufsliste</h1>
              <Separator />
              <div className="flex w-full flex-row items-center justify-center pt-4">
                  <ShoppingList list={data} />
              </div>
          </div>);

  } catch (_e) {
      return <div>Kein Einkaufsliste gefunden</div>;
  }
}
