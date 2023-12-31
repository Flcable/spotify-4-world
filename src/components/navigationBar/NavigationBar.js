import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css"
import * as ROUTES from "../../routes/routes";

const NavigationBar = () => {
    return (
        <header className="NavigationBar">
            <nav>
                <ul>
                    <Link to={ROUTES.HOME}>
                        <li>Home</li>
                    </Link>

                    <Link to={ROUTES.SIGN_UP}>
                        <li>Sign Up </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default NavigationBar;