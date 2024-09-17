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

export const getCategoryById = async (id: string) => {
    try {
        const response = await get(`/Category/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}