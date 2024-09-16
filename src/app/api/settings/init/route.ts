import type {NextRequest} from "next/server";
import {auth} from "@clerk/nextjs/server";
import {env} from "~/env";
import {API, API_VERSION, SETTINGS_ENDPOINT} from "~/server/constants/constants";

const POST = async (_req: NextRequest) => {
    const {userId} = auth();
    if (!userId) {
        console.error("Unauthorized");
        return new Response("Unauthorized", {status: 401});
    }
    const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${SETTINGS_ENDPOINT}/init/${userId}`, {
        method: "POST",
    })
    if (!response.ok) {
        return new Response("Settings Creation failed", {status: 500});
    }
    return new Response("Settings Creation Successful", {status: 200});
};

export {POST}