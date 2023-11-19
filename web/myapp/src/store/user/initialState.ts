import { IUser } from "../../services/models/user";

export interface IUserInitialState {
    user: IUser | undefined,
    isLoading: boolean | undefined,
    isSuccess: boolean | undefined,
    message: string | undefined
}

const initialState : IUserInitialState = {
    user: {} as IUser || undefined,
    isLoading: undefined,
    isSuccess: undefined,
    message: undefined
}

export default initialState