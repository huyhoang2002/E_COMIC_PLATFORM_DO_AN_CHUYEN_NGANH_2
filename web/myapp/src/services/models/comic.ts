import { IPaginationRequest } from "../base/base-request";
import { IPagingResponse } from "../base/base-response";
import { ICategory } from "./category";

export interface IAuthor { 
    name: string
    dateOfBirth: Date
    description: string
    avatar: string | null
    id: string
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
    wallPaperUrl: string
}

export interface IComicResponse extends IPagingResponse {
    data: Array<IComic>
}

export interface ISearchResponse extends IPagingResponse {
    data: Array<IComic>
}

export interface IComicEpisodeDetailResponse {
    comicId: string
    episode: string
    episodeDetail: Array<TEpisodeDetail>,
    id: string
    modifiedAt: Date
}

export interface ISearchComicRequest extends IPaginationRequest {
    categoryId?: string
    keyWord: string
}

export interface ICommentRequest {
    commentText: string
    commentImage: string
    userName: string
    userId: string
    userAvatar: string
    commicId: string
}

export interface ICommentResponse extends ICommentRequest {
    id: string
    modifiedDate: Date
}

export interface IAuthorResponse {
    id: string
    name: string
    dateOfBirth: string
    description: string
    avatarImage: string | null
    comics: IComic[]
}

export interface IAddComicRequest {
    title: string
    description: string
    authorId: string
    categoryId: string
    file: any
}

export interface IAddComicToFavorite {
    comicTitle: string
    comicUrl: string
    userId: string
    userName: string,
    comicId: string
}

export interface IFavoriteComic {
    id: string
    comicTitle: string
    comicUrl: string
    comicId: string
    userId: string
    userName: string
    updateDate: Date
}