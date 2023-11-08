import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import jwt_decode from "jwt-decode";


export default function Login() {
  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password, setPasswor] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('https://scriptsurgeons.pythonanywhere.com/account/token/',{
        email,
        password,
    }).then((res)=>{

      if (res?.data?.access) {
      var decoded = jwt_decode(res?.data?.access);
        const authData = {
          accessToken: res?.data?.access,
          user: decoded,
        }
        localStorage.setItem("auth", JSON.stringify(authData))
        alert("Login successfull")
        window.location.href = "/profile";
      }
      
      console.log(decoded);
    }).catch(err=>{
      console.log(err);
      alert("Login failed!!\nCheck your email and password!!")
    })

    // console.log(email)
    // console.log(password)
   
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 shadow-lg rounded-md bg-gray-900 bg-opacity-40">
        <h1 className="text-3xl block text-center font-semibold text-white">
          <i className="fa-solid fa-user text-white"></i> Login
        </h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit} className='text-black'>
          <div className="mt-3 text-white">
            <label htmlFor="username" className="block text-white mb-2">
              Email
            </label>
            <input 
            onChange={(e)=> setEmail(e.target.value)}
              type="text"
              id="email"
              className="text-white bg-transparent border w-full px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter email..."
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-white mb-2 text-white">
              Password
            </label>
            <input
              onChange={(e)=> setPasswor(e.target.value)}
              type="password"
              id="password"
              className="bg-transparent border w-full text-white px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Password..."
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <input type="checkbox" id="rememberMe" />
              <label className='text-white' htmlFor="rememberMe">Remember Me</label>
            </div>
            <div>
              <a href="#" className="text-indigo-800 font-semibold text-white">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
            >
              <i className="fa-solid fa-right-to-bracket text-white"></i>&nbsp;&nbsp;Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
