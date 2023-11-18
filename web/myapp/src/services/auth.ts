import { post } from "./base/base-service"
import { ISignIn, ISignUp } from "./models/auth"

export const signInAsync = async ({ email, password }: ISignIn) => { 
    try {
        const response = await post("/sign-in", {
            email,
            password
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const signUpAsync = async ({ email, password, role, userName }: ISignUp) => { 
    try {
        const response = await post("/register", {
            userName,
            email,
            password, 
            role
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}