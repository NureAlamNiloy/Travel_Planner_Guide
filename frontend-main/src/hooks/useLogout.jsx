import { useContext } from "react"
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function useLogout() {
    const [, setAuth] = useContext(AuthContext)
    const navigate = useNavigate();
  

    const handleLogout  = ()=>{
            setAuth({})
            let localAuth = localStorage.getItem("auth")
            if (localAuth) {
                localStorage.clear()
                
            }
            return navigate("/login")

    }
 
    return handleLogout
}