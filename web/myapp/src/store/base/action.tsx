import { Action } from "redux"
import * as fromActions from './actionType'

export interface IResetStateAction extends Action{}
export const resetStateAction = (): IResetStateAction => {
    return {
        type: fromActions.RESET_STATE_ACTION
    }
}