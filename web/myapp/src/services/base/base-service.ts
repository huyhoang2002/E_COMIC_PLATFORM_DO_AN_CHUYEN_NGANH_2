import axios from 'axios'
import { getAccessToken } from '../../utils/helpers/localstorageHelper'

const client = axios.create({
    baseURL: process.env.DEVELOPMENT_URL,
    timeout: 3000000
})

const clientWithCredential = axios.create({
    withCredentials: true,
    baseURL: process.env.DEVELOPMENT_URL,
    timeout: 300000,
    headers: {
        Authorization: `Bearer ${getAccessToken("accessToken")}`
    }
})

export const get = (route: string) => {
    return client.get(route)
}

export const getWithToken = (route: string) => {
    return clientWithCredential.get(route)
}

export const post = (route: string, data: any) => {
    return client.post(route, data)
}

export const postWithToken = (route: string, data: any) => {
    return clientWithCredential.post(route, data)
}

export const put = (route: string, data: any) => {
    return client.put(route, data)
}

export const putWithToken = (route: string, data: any) => {
    return clientWithCredential.put(route, data)
}

export const remove = (route: string) => {
    return client.delete(route)
}

export const removeWithToken = (route: string) => {
    return clientWithCredential.delete(route)
}

