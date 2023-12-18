import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
import {useState} from "react";
import Logo from "@/components/Logo";
import {FaRegEnvelope} from "react-icons/fa";
import {MdLockOutline} from "react-icons/md";

export default function Layout({children}) {
  const [showNav,setShowNav] = useState(false);
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-one to-two">
        <main className="flex flex-col items-center justify-center w-full flex-1 text-center px-20 bg-gray">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/6 p-5">
            <img 
            src="/adminpic.png"
            />
              
            
            </div>
          <div className="w-3/6 bg-three text-two rounded-tr-2xl rounded-br-2xl p-2">
                  
                
                  <h2 className="text-4xl font-bold mb-4">Login to Admin Panel</h2>
                  <div className="display-flex flex-col ">
                   <div className="border-2 w-44 border-white inline-block mb-8 mt-0"></div>
                  {/*<div className="flex flex-col items-center mb-3">
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-lg">
                      <FaRegEnvelope className="text-two"/>
                        <input type="email" name="email" placeholder="Email" className="text-black outline-none rounded-lg text-sm bg-gray-100 mb-0 py-0 border-0 shadow-0"/>
                    </div> 
                  </div>
                  
                  <div className="flex flex-col items-center mb-4 ">
                        <div className="bg-gray-100 w-64 p-2 flex items-center rounded-lg">
                              <MdLockOutline className="text-two"/>
                              <input type="password" name="password" placeholder="Password" className="text-black flex-1 outline-none text-sm bg-gray-100 mb-0 py-0 border-0 shadow-0 rounded-lg"/>
                          </div>
                    </div>
                    <button 
                    className="border-2 hover:bg-white hover:text-two rounded-lg px-12 py-2 inline-block font-semibold border-two bg-two text-white" 
                    type="submit">Login</button>

                    <p className="text-white my-3">or Login with Providers</p> */}
                    <div>
                    <button onClick={() => signIn('google')} 
                    className="border-2 hover:bg-white w-80 hover:text-two rounded-lg  px-12 py-2 inline-block font-semibold border-two bg-two text-white mb-4"
                    >
                      Login with Google
                      </button></div>

                      <button onClick={() => signIn('facebook')} 
                    className="border-2 hover:bg-white w-80 hover:text-two rounded-lg w-58 px-12 py-2 inline-block font-semibold border-two bg-two text-white mb-4"
                    >
                      Login with Facebook
                      </button>

                      <button onClick={() => signIn('github')} 
                    className="border-2 hover:bg-white w-80 hover:text-two rounded-lg px-12 py-2 inline-block font-semibold border-two bg-two text-white mb-4"
                    >
                      Login with Github
                      </button>

                      <button onClick={() => signIn('reddit')} 
                    className="border-2 hover:bg-white w-80 hover:text-two rounded-lg px-12 py-2 inline-block font-semibold border-two bg-two text-white mb-4"
                    >
                      Login with Reddit
                      </button>


                      <button onClick={() => signIn('discord')} 
                    className="border-2 hover:bg-white w-80 hover:text-two rounded-lg px-12 py-2 inline-block font-semibold border-two bg-two text-white mb-4"
                    >
                      Login with Discord
                      </button>
                      </div>
            </div>
          </div>  
      </main>

      </div>
      
      
      
      // <div className=" min-h-screen bg-black-100 ">
      // <div className="box-border w-32 p-4 border-4 ">
      // <h1 className="text-center text-orange-600 text-4xl mb-4 ">
      //   Login
      // </h1>
        
      //   <input className=" " type="email" placeholder="email "name="email" />
      //   <input type="password" placeholder="password" name="password" className="" />
      //   <button className="bg-bgDefault p-2 px-4 rounded-lg  " type="submit">Login</button>

      //   <div className="my-4 text-center text-gray-500">
      //     or login with provider
      //   </div>
        
        
      //   <div className="flex text-center w-full">
      //     <button onClick={() => signIn('google')} className="flex bg-white p-2 px-4 rounded-lg">Login with Google</button>
      //     <button onClick={() => signOut('google')} className="flex bg-white p-2 px-4 rounded-lg">Logout</button>
      //   </div>
      // </div>
      // </div>
    );
  }

  return (
    <div className="bg-bgTile min-h-screen ">
      <div className="block md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
