import { useState } from "react";

const Login = ({ handleLogin, }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-xl border-emerald-600 p-20">
                <form onSubmit={(e) => submitHandler(e)} className="flex flex-col items-center justify-center gap-5">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} required className="border-2 border-emerald-600 rounded-full w-100 py-4 px-5 text-xl bg-transparent placeholder:text-gray-400" type="email" placeholder="Enter your email..." autoComplete="username" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} required className="border-2 border-emerald-600 rounded-full w-100 py-4 px-5 text-xl bg-transparent placeholder:text-gray-400" type="password" placeholder="Enter your password..." autoComplete="current-password" />
                    <button className="mt-7 bg-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-white w-50 cursor-pointer border-none outline-none">Login in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
