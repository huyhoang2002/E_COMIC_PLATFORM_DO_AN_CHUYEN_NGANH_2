export interface IUser {
    firstName: string
    lastName: string
    age: number
    country: string
    job: string
    phoneNumber: string
    bio: string
    imageUrl: string
    isDisable: boolean
    isRemove: boolean
    accountId: string
    id: string
    modifiedDate: Date
}

export interface IAddUser {
    firstName: string
    lastName: string
    age: number
    country: string
    job: string
    phoneNumber: string
    bio: string
}
