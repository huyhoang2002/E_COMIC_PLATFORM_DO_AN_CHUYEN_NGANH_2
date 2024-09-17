export const saveCredentialToLocalStorage = (accessToken: string | undefined, refreshToken: string | undefined) => {
    localStorage.setItem("accessToken", accessToken as string)
    localStorage.setItem("refreshToken", refreshToken as string)
}

export const getAccessToken = (key: string) => {
    return localStorage.getItem(key)
}

export const getRefreshToken = (key: string) => {
    return localStorage.getItem(key)
}

export const removeCredential = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("role")
}

export const saveRole = (role: string) => {
    localStorage.setItem("role", role)
}