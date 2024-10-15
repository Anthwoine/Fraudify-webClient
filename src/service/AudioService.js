import {customFetch} from "../util/CustomFetch"

export async function getAudioList() {
    return await customFetch("api/track/")
}

export async function getAudioFile(id) {
    return await customFetch(`api/track/${id}`)
}

export async function getAudioFileByTitle(title, pageSize, pageNumber) {
    let params = title ? `query=${title}` : ``;
    params += pageSize ? `&pageSize=${pageSize}` : ``;
    params += pageNumber ? `&pageNumber=${pageNumber}` : ``;
    return await customFetch(`api/track/search-title?${params}`)
}