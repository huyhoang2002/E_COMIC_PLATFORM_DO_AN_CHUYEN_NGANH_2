import { get, postWithToken } from "./base/base-service"
import { IAddComicRequest, IComicResponse, ISearchComicRequest } from "./models/comic";

export const getAuthor = async (isDeleted: boolean, keyword?: string) => {
    try {
        const response = await get(keyword === undefined || keyword === null ? `/author?isDeleted=${isDeleted}` : `/author?keyword=${keyword}&isDeleted=${isDeleted}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getAuthorById = async (id: string) => {
    try {
        const response = await get(`/author/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

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
        const response = await get(`/comic/${comicId}/episodes`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getComicEpisodeDetail = async (comicId: string, index: number) => {
    try {
        const response = await get(`/comic/${comicId}/episode?index=${index}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getComicEpisodeDetailByEpisodeId = async (comicId: string, episodeId: string) => {
    try {
        const response = await get(`/comic/${comicId}/episode/${episodeId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const searchComic = async ({ keyWord, categoryId, pageIndex, pageSize }: ISearchComicRequest) => {
    try {
        if (categoryId === undefined) {
            const response = await get(`/comic/query?keyWord=${keyWord}&pageSize=${pageSize}&pageIndex=${pageIndex}`)
            return response.data
        }
        else {
            const response = await get(`/comic/query?keyWord=${keyWord}&categoryId=${categoryId}&pageSize=${pageSize}&pageIndex=${pageIndex}`)
            return response.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const getComicComment = async (comicId: string) => {
    try {
        const response = await get(`/reaction/${comicId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addComic = async (request: IAddComicRequest) => {
    try {
        const response = await postWithToken("/comic", request)
        return response.data
    } catch (error) {
        console.log(error)
    }
}