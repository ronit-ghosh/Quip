import React, { useEffect, useState } from 'react';
import { userAuth } from '../context/AuthContext';
import { loginFn } from '../config/authentication';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { isLoggedIn, currentUser } = userAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogging, setIsLogging] = useState(false);
    const [error, setError] = useState('');

    async function login(e) {
        e.preventDefault()
        try {
            if (!isLogging) {
                if (email === "" || password === "") {
                    setError("Input field empty");
                    return;
                }
                setIsLogging(true);
                await loginFn(email, password);
            }
        } catch (error) {
            setError(error);
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate("/chatroom");
        }
    }, [currentUser]);

    return (
        <>
            <div className="h-[92dvh] w-full flex flex-col justify-center items-center">
                <form onSubmit={login} className="flex flex-col gap-8 p-5">
                    <div className="text-3xl mb-5 font-semibold whitespace-nowrap">Login to Your Account</div>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70"> <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /> <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="email" className="grow" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70"> <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type='submit' className={`btn ${isLogging ? 'btn-disabled' : 'btn-primary'} text-lg`}>{isLogging ? "Logging in..." : "Log In"}</button>
                </form>
            </div>
        </>
    )
}

export default Login
