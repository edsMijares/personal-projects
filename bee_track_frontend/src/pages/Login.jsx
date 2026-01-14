import { useState, useEffect } from "react";
import { useLoading } from "../js/loading-context";
import { login } from "../api/api";
import auth_checker from "../js/auth-checker";
import Img from "../components/reuseable/Img";
import Inp from "../components/reuseable/Inp";
import Btn from "../components/reuseable/Btn";

function Login() {
    const { showLoading, hideLoading } = useLoading();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        auth_checker();
    }, []);

    const handleLogin = async () => {
        try {
            showLoading();
            await login({ username, password });
        } finally{
            hideLoading();
        }
    };

    return (
        <main className="flex flex-col h-screen w-[25vw] px-5">
            <section className="flex flex-col w-full items-center my-auto">
                <Img src="/images/queen_bee_icon.png" alt="Register Banner" className="w-[150px] mb-10" />
                <h1 className="text-primary-yellow text-4xl font-bold mb-5">Login</h1>
                <article className="flex flex-col px-5 gap-3">
                    <Inp value={username} onChange={(e) => setUsername(e.target.value)} name="Username" placeholder="Username" />
                    <Inp value={password} onChange={(e) => setPassword(e.target.value)} name="Password" placeholder="Password" type="password" />
                    <div className="flex flex-row mt-5 justify-center">
                        <Btn name="Login" onClick={handleLogin} />
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Login;
