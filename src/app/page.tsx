"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, FormEvent } from "react";
import { useContext } from "react";
import { UserDataContext } from "./utils/user-data-context";

export default function Login() {
    // This will be the splash page/login page, currently it is a placeholder to take you to videos

    const {setCurrentUserID} = useContext(UserDataContext);
    const [inputUserID, setInputUserID] = useState<string>("");

    const router = useRouter();
    
    useEffect(() => {
        // reset on logout/refresh
        setCurrentUserID(null);
    }, [setCurrentUserID]);

    function handleLogin(event: FormEvent) {
        event.preventDefault();
        setCurrentUserID(inputUserID);
        router.push("/videos");
    }

    return (
        <main id="login-page">
            <section>
                <h1>
                    <strong>Welcome to EdVid!</strong>
                    <span>Video-Powered Learning</span>
                </h1>
                <form className="entry-form" onSubmit={(event) => handleLogin(event)}>
                    <h2>Login</h2>
                    <div className="form-input">
                        <label htmlFor="user-id-input">Username</label>
                        <input id="user-id-input" type="text" required aria-required="true"
                        autoComplete="off" value={inputUserID}
                        onChange={(event) => setInputUserID(event.target.value)}/>
                    </div>
                    <div className="form-end-buttons">
                        <input className={"form-button " + (inputUserID !== "" ? "" : "button-disabled")}
                        type="submit" value="Login"/>
                    </div>
                </form>
            </section>
        </main>
    );
}