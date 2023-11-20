import { useEffect, useState } from "react"
import { getAccessToken, getRefreshToken } from "../utils/helpers/localstorageHelper"

const useToken = () => {
    const [ accessToken, setAccessToken ] = useState<string | null>()
    const [ refreshToken, setRefreshToken ] = useState<string | null>()

    useEffect(() => {
        const accessTokenFromStorage = getAccessToken("accessToken")
        setAccessToken(accessTokenFromStorage)
    }, [])

    useEffect(() => {
        const refreshTokenFromStorage = getRefreshToken("refreshToken")
        setRefreshToken(refreshTokenFromStorage)
    }, [])
    return [ accessToken, refreshToken ]
}

export default useToken