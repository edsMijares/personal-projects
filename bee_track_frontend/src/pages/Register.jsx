import { useState, useEffect } from "react";
import { register } from "../api/api";
import auth_checker from "../js/auth-checker";
import Img from "../components/reuseable/Img";
import Inp from "../components/reuseable/Inp";
import Btn from "../components/reuseable/Btn";
function Register() {
    useEffect(() => {
        auth_checker();
    }, []);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    function handleRegister() {
        const apiResponse = register({ username, email, password, password_confirmation: confirmPassword });
        apiResponse.then((data) => {
            console.log("Registration successful:", data);
            // You can add further actions here, like redirecting the user
        }).catch((error) => {
            console.error("Registration failed:", error);
            // Handle registration errors here
        });
    }

    return (
        <main className="flex flex-col h-screen w-[25vw] px-5">
            <section className="flex flex-col w-full items-center my-auto">
                <Img src="/images/queen_bee_icon.png" alt="Register Banner" className="w-[150px] mb-10" />
                <h1 className="text-primary-yellow text-4xl font-bold mb-5">Register</h1>
                <article className="flex flex-col px-5 gap-3">
                    <Inp value={email} onChange={(e) => setEmail(e.target.value)} name="Email Address" placeholder="Email Address" type="email" />
                    <Inp value={username} onChange={(e) => setUsername(e.target.value)} name="Username" placeholder="Username" />
                    <Inp value={password} onChange={(e) => setPassword(e.target.value)} name="Password" placeholder="Password" type="password" />
                    <Inp value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="Confirm Password" placeholder="Confirm Password" type="password" />
                    <div className="flex flex-row mt-5 justify-center">
                        <Btn name="Register" onClick={handleRegister} />
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Register;