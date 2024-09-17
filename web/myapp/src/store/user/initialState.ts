import { ICommentResponse } from "../../services/models/comic";
import { IUser } from "../../services/models/user";

export interface IUserInitialState {
    user: IUser | undefined,
    isLoading: boolean | undefined,
    isCommentLoading: boolean | undefined,
    isCommentSuccess: boolean | undefined,
    isSuccess: boolean | undefined,
    message: string | undefined,
}

const initialState : IUserInitialState = {
    user: {} as IUser || undefined,
    isLoading: undefined,
    isCommentLoading: undefined,
    isCommentSuccess: undefined,
    isSuccess: undefined,
    message: undefined,
}

export default initialState