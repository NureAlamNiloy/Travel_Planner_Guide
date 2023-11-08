import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../App";


export default function useAuthCheck() {
    const [, setAuth] = useContext(AuthContext)
    const [authCheck, setAuthCheck] = useState(false)
    useEffect(() => {
        setAuthCheck(false)
        let localAuth = localStorage.getItem("auth")
        // console.log(localAuth);
        if (localAuth) {
            localAuth = JSON.parse(localAuth)
            if (localAuth.accessToken && localAuth.user) {
                setAuth(localAuth)
            }
        }
        setAuthCheck(true)
    }, [setAuth])
    return authCheck;
}