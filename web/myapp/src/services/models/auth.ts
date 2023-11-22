export interface ISignIn {
    email: string
    password: string
}

export interface IRole {
    role: string
}

export interface Token extends IRole {
    accessToken: string,
    refreshToken: string,
    tokenType: string
}

export interface ISignUp {
    userName: string
    email: string
    password: string
    role: string
}

