import { customFetch } from "../util/CustomFetch";

export async function getMetadata(url) {
    return await customFetch('api/youtube-dl/download-metadata', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({videoUrl: url}),

    });
}