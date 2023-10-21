import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="signform">
            <form>
                <label>Email</label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>

                <label>Password</label>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};


export default SignUpForm;