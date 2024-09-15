import type {NextRequest} from "next/server";
import {auth} from "@clerk/nextjs/server";
import {env} from "~/env";
import {API, API_VERSION, DISCOUNT_ENDPOINT} from "~/server/constants/constants";

const GET = async (_req: NextRequest) => {
    const {userId} = auth();
    if (!userId) {
        console.error("Unauthorized");
        return new Response("Unauthorized", {status: 401});
    }
    const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${DISCOUNT_ENDPOINT}`)
    const data = await response.json();
    if (!response.ok) {
        return new Response("Menu creation failed", {status: 500});
    }
    return new Response(JSON.stringify(data), {status: 200});
}

export {GET};