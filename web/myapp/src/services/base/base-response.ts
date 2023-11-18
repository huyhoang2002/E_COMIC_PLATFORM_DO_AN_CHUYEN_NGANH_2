export interface IPagingResponse {
    pageIndex: number
    pageSize: number
    pageCount: number
    totalRows: number
}

export interface IBaseResponse<T> {
    message?: string | null
    response: T
    isSuccess: boolean
}