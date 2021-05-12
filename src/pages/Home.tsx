//import { createRequire } from 'module';
import React from 'react'
import todoImage from '../img/Todo-Logo.png'
import Login from "../components/auth/Login"
import Signup from "../components/auth/Signup"

const Home = () => {
const [isSignup, setIsSignup] = React.useState<boolean>(false);

  return(
<div className="flex w-full h-screen">
      <div className="w-1/2 max-w-xs mx-auto relative">
         <div className="absolute inset-0 m-auto" style={{height: '300px'}}>
          {isSignup && <Signup renderLogin={() => setIsSignup(false)} /> || <Login renderSignup={() => setIsSignup(true)} />}
        </div>
      </div>
      <div className="w-1/2">
       <img className="bg-bottom contrast-200 " src= {todoImage} alt="TODO image"/>
       </div>
    </div>
  )
}
export default Home ;