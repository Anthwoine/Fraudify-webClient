import {customFetch} from "../util/CustomFetch"

export async function getAudioList() {
    return await customFetch("api/track/")
}

export async function getAudioFile(id) {
    return await customFetch(`api/track/${id}`)
}