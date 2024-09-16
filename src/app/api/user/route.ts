import type {NextRequest} from "next/server";
import {auth} from "@clerk/nextjs/server";
import {env} from "~/env";
import {API, API_VERSION, USER_ENDPOINT} from "~/server/constants/constants";

const GET = async (_req: NextRequest) => {
    const {userId} = auth();
    if (!userId) {
        console.error("Unauthorized");
        return new Response("Unauthorized", {status: 401});
    }
    const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${USER_ENDPOINT}/${userId}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    })
    const user = await response.json();
    if (!response.ok) {
        return new Response("User not found", {status: 500});
    }
    return new Response(JSON.stringify(user), {status: 200});
}

export {GET};