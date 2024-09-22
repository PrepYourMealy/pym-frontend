import type {NextRequest} from "next/server";
import {auth} from "@clerk/nextjs/server";
import {env} from "~/env";
import {API, API_VERSION, LIST_ENDPOINT} from "~/server/constants/constants";

const GET = async (_req: NextRequest) => {
    const {userId} = auth();
    if (!userId) {
        console.error("Unauthorized");
        return new Response("Unauthorized", {status: 401});
    }
    const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${LIST_ENDPOINT}/${userId}`)
    const data = await response.json();
    if (!response.ok) {
        return new Response("Menu creation failed", {status: 500});
    }
    return new Response(JSON.stringify(data), {status: 200});
}

const PUT = async (req: NextRequest) => {
    const {userId} = auth();
    if (!userId) {
        console.error("Unauthorized");
        return new Response("Unauthorized", {status: 401});
    }
    const response = await fetch(`${env.APPLICATION_SERVER_URL}${API}${API_VERSION}${LIST_ENDPOINT}/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
    })
    if (!response.ok) {
        return new Response("Menu update failed", {status: 500});
    }
    return new Response("Menu updated", {status: 200});
}

export {GET, PUT};