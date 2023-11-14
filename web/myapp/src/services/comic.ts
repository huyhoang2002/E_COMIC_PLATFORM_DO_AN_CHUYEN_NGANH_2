import { get } from "./base/base-service"
import { IComicResponse } from "./models/comic";

export const getComics = async (isDeleted: boolean, pageSize: number, pageIndex: number) => {
    try {
        const response = await get(`/Comic?isDeleted=${isDeleted}&pageSize=${pageSize}&pageIndex=${pageIndex}`);
        return response.data as IComicResponse
    } catch (error) {
        console.log(error)
    }
}

export const getComicById = async (id: string) => {
    try {
        const response = await get(`/comic/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getComicEpisode = async (comicId: string) => {
    try {
        const response = await get(`/episode?comicId=${comicId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}