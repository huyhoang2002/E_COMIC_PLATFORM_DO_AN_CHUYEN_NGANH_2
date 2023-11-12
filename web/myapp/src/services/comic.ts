import { get } from "./base/base-service"
import { IComicResponse } from "./models/comic";

export const getComics = async (isDeleted: boolean, pageSize: number, pageIndex: number) => {
    const response = await get(`/Comic?isDeleted=${isDeleted}&pageSize=${pageSize}&pageIndex=${pageIndex}`);
    return response.data as IComicResponse
}