import { get } from './base/base-service'
import { TCategories } from './models/category'

export const getCategories = async () => {
    try {
        const response = await get("/Category")
        return response.data as TCategories
    } catch (error) {
        console.log(error)
    }
}