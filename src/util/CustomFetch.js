const baseUrl = "http://localhost:8080/"
export async function customFetch(path, options) {

    const url = baseUrl + path;
    const modifiedOptions = {
        ...options,
        headers: {
            ...options?.headers,
            ...(localStorage.getItem("token") ? {"Authorization": `Bearer ${localStorage.getItem("token")}`} : {})
        }
    }


    const response = await fetch(url, modifiedOptions)
    if(response.status === 403) {
        const json = await response.json();
        if(json.message === "token_invalid" || json.message === "no_token_found") {
            localStorage.clear();
            fetch(baseUrl + "auth/logout", { method: "POST" })
                .then(() => {
                    window.location.href = "/login";
                })
        }
    } else {
        return response;
    }
}