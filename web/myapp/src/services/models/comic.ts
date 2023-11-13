import { IPagingResponse } from "../base/base-response";

export interface IComic {
    id: string
    title: string
    description: string
    imageUrl: string
    modifiedAt: Date
}

export interface IComicResponse extends IPagingResponse {
    data: Array<IComic>
}