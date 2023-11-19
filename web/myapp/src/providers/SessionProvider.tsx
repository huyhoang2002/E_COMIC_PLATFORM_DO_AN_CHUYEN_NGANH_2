import React, { createContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isSuccessSelector } from '../store/user/selector'
import { useDispatch } from 'react-redux'
import { resetStateAction } from '../store/base/action'


interface ISessionContextValue {

}

const sessionContextValue : ISessionContextValue = {

}

const SessionContext = createContext(sessionContextValue)

const SessionProvider = ({ children }: { children: React.ReactNode }) => {  

    const isSuccess = useSelector(isSuccessSelector)
    const dispatch = useDispatch()
    
    useEffect(() => {
       if (isSuccess === true && /(sign-in|sign-up)/i.test(window.location.href)) {
            window.location.href = "/c"
       }
       return () => {
            if (isSuccess === true) {
                dispatch(resetStateAction())
            }
       }
    }, [window.location.href, isSuccess])

    const values = {}

    return (
        <SessionContext.Provider value={values}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider