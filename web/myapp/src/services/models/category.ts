import { IComic } from "./comic"

export interface ICategory {
    id: string
    categoryName: string
    modifiedDate: Date
}

export type TCategories = Array<ICategory>

export interface ICategoryDetail extends ICategory {
    comics: IComic[]
}