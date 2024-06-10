import {customFetch} from "../util/CustomFetch";

export async function login(username, password) {
    return await customFetch("api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    });
}