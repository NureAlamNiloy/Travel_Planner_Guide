import { useContext } from "react";
import { AuthContext } from "../App";

export default function useAuth() {
    const [auth] = useContext(AuthContext)
    // console.log(auth);
    if (auth?.accessToken && auth?.user) return true;

    return false;
}