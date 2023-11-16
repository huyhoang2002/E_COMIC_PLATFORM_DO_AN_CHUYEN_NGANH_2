import { IPagingResponse } from "../base/base-response";

export interface IAuthor { 
    name: string
    dateOfBirth: Date
    description: string
    avatar: string | null
    id: string
}

export interface ICategory {
    id: string,
    categoryName: string
    modifiedAt: Date
}

export type TEpisode = {
    id: string
    episode: string
    comicId: string
    modifiedAt: Date
}

export type TEpisodeDetail = {
    id: string
    imageUrl: string
    modifiedAt: Date
    comicEpisodeId: string
}

export interface IComic {
    id: string
    title: string
    description: string
    imageUrl: string
    modifiedAt: Date
    author: IAuthor
    category: ICategory
}

export interface IComicResponse extends IPagingResponse {
    data: Array<IComic>
}

export interface IComicEpisodeDetailResponse {
    comicId: string
    episode: string
    episodeDetail: Array<TEpisodeDetail>,
    id: string
    modifiedAt: Date
}

