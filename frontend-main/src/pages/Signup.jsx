
import axios from 'axios';
import { ArrowRight, Link } from 'lucide-react'
import { useState } from 'react';
import { toast } from 'react-toastify';

export function Signup() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email:email,
      username: phone,
      password: password,
      password2: password,
    };
    axios
      .post("https://scriptsurgeons.pythonanywhere.com/account/register/", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("Account Created Successfully")
      })
      .catch((err) => {
        console.log(err);
        alert("Account Creation Failed check your details!\npassword must be 8 characters long!\nCheck your email!\nCheck your username!")
      });


  };
  
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md text-white bg-gray-900 bg-opacity-40 rounded-lg py-10 px-4">
            <h2 className="text-white text-3xl font-bold leading-tight sm:text-4xl">Sign up</h2>
            <p className="mt-2 text-base text-white">
              Already have an account?{' '}
              <a
                href="/Login"
                title=""
                className="font-medium text-white transition-all duration-200 hover:underline text-white"
              >
                Sign In
              </a>
            </p>
            <form action="#" method="POST" className="mt-8 text-white">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium "
                  >
                    {" "}
                    Username{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="username"
                      id="phone"
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className=" bg-transparent text-base font-medium"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-transparent flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
              
                </div>
              </div>
            </form>
           
          </div>
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <img
            className=" mx-auto max-h-[80%] max-w-[90%] rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
