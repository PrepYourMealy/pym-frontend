import {auth} from "@clerk/nextjs/server";
import {type NextRequest} from "next/server";
import {env} from "~/env";
import {API, API_VERSION, MENU_ENDPOINT} from "~/server/constants/constants";


// Regenerate new Menu
const POST = async (_req: NextRequest) => {
    const {userId} = auth();
    if (!userId) {
        console.error("Unauthorized");
        return new Response("Unauthorized", {status: 401});
    }
    const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${MENU_ENDPOINT}/${userId}`, {
        method: "PUT",
    })
    if (!response.ok) {
        return new Response("Menu creation failed", {status: 500});
    }
    return new Response("Menu creation triggered", {status: 200});
};

// Get Menu
const GET = async (_req: NextRequest) => {
    const {userId} = auth();
    if (!userId) {
        console.error("Unauthorized");
        return new Response("Unauthorized", {status: 401});
    }
    const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${MENU_ENDPOINT}/${userId}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    })
    const menu = await response.json();
    if (!response.ok) {
        return new Response("Menu creation failed", {status: 500});
    }
    return new Response(menu, {status: 200});
}

export {POST, GET};
