import React, { useContext, useState } from "react";
import { FireBaseContext } from "../../context/FirebaseContext";
import "./SignUpForm.css";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { firebase } = useContext(FireBaseContext);

    return (
        <div className="signform">
            <form onSubmit={(event) => {
                event.preventDefault();
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => alert('signed up!'))
                    .catch((error) => alert(error.message));
                alert(email + " " + password);
                setEmail ("");
                setPassword("");
            }}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}>

                </input>

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};


export default SignUpForm;