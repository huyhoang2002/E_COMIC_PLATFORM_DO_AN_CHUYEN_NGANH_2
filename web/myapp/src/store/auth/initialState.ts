export interface IAuthInitialState {
    accessToken: string | undefined
    refreshToken: string | undefined
    tokenType: string | undefined
    role: string | undefined
    isSuccess: boolean | undefined
    isLoading: boolean | undefined
}

const initialState : IAuthInitialState = {
    accessToken: undefined,
    refreshToken: undefined,
    tokenType: undefined,
    role: undefined,
    isSuccess: undefined,
    isLoading: undefined
} 

export default initialState