import { IBaseResponse } from "./base/base-response"
import { getWithToken, postWithToken } from "./base/base-service"
import { IAddUser } from "./models/user"

export const getUserInfo = async () => {
    try {
        const response = await getWithToken("/user/profile")
        
        console.log(response.data)
        return response.data
    } catch (error: any) {
        console.log(error.response.status)
        if (error.response.status === 401) {
            return { 
                isSuccess: false,
                response: null,
                message: "User session has been expired"
            } as IBaseResponse<any>
        }
    }
}

export const createUserProfile = async (user: IAddUser) => {
    try {
        const response = await postWithToken("/user", user)
        return response.data
    } catch (error) {
        console.log(error)
    }
}