import React from "react";
import axios from "axios";

interface SignupProps {
  renderLogin: () => void;
}

const Signup = ({renderLogin}: SignupProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const onSubmit = () => {
    axios.post('https://cloud-project7.herokuapp.com/signup', {
      username: username,
      password: password
    }).then(res => console.log(res));
  }

  React.useEffect(() => {
    if (password === confirmPassword) setDisabled(false);
    else setDisabled(true);
  }, [password, confirmPassword])

  return(
    <div style={{height: '300px'}}>
      <h1 className="text-center text-indigo-400 font-bold text-2xl">Sign up!</h1>
      <div className="mb-4">
        <label>Username</label>
        <input onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border border-blue-600 rounded-md" type="text" placeholder="username" />
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-blue-600 rounded-md" type="password" placeholder="password" />
      </div>
      <div className="mb-4">
        <label>Confirm password</label>
        <input onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 border border-blue-600 rounded-md" type="password" placeholder="password" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>Already a member? <span className="text-pink-400 cursor-pointer font-bold" onClick={renderLogin}>Login</span></p>
        </div>
        <button className={`rounded-lg px-6 py-3 font-bold text-white ${disabled ? "bg-blue-600" : "bg-green-400"}`} disabled={disabled} onClick={() => onSubmit()}>Sign up!</button>
      </div>
    </div>
  )
}

export default Signup;