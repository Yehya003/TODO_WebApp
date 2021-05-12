import React from "react";
import axios from "axios";


interface LoginProps {
  renderSignup: () => void;
}
const Login = ({renderSignup}: LoginProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = () => {
    axios.post(`${process.env.SIGNIN}`, {
      username: username,
      password: password
    }).then(res => {
      // sucessful, save the token
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('token', token);

        window.location.href = '/dashboard';
      } else {
        alert("LOGIN WAS UNSUCCESSEFUL, PLEASE RE-CHECK THE USERNAME & PASSWORD!");
      }
    });
  }

  return(
    <div style={{height: '300px'}}>
      <h1 className="text-center text-indigo-400 font-bold text-2xl">Login</h1>
      <div className="mb-4">
        <label>Username</label>
        <input onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border border-blue-600 rounded-md" type="text" placeholder="username" />
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-blue-600 rounded-md" type="password" placeholder="password" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>No account? <span className="text-pink-400 cursor-pointer font-bold" onClick={renderSignup}> Sign up</span></p>
        </div>
        <button className="rounded-lg px-6 py-3 font-bold bg-green-400 text-white" onClick={() => onSubmit()}>Login</button>
      </div>
    </div>
  )
}

export default Login;