import { postWithToken } from "./base/base-service"
import { IAddAuthorRequest } from "./models/author"

export const addAuthor = async (data: IAddAuthorRequest) => {
    try {
        const response = await postWithToken("/author", data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}