"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { useContext } from "react";
import { UserDataContext } from "./utils/user-data-context";
import { usernameAllowedCharacters, usernameRegex } from "./utils/constants";

export default function Login() {
    // This is the login page where you can enter a user_id to login as that user (which is used when commenting and uploading/editing content)

    const { handleSetCurrentUserID } = useContext(UserDataContext);
    const [inputUserID, setInputUserID] = useState<string>("");

    const router = useRouter();

    function handleChangeUserIDInput(newUserID: string) {
        // if it contains disallowed characters, don't update it
        if (newUserID.match(usernameAllowedCharacters) || newUserID === "") {
            setInputUserID(newUserID.toLowerCase());
        }
    }

    function handleLogin(event: FormEvent) {
        event.preventDefault();
        // if it doesn't match the regex, don't login
        if (!inputUserID.match(usernameRegex)) {
            return;
        }
        setInputUserID(inputUserID.toLowerCase());
        handleSetCurrentUserID(inputUserID);
        // go to the homepage
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
                        <label id="user-id-label" htmlFor="user-id-input">Username</label>
                        <input id="user-id-input" type="text" pattern={usernameRegex.toString().slice(1, -1)}
                        placeholder="user_name" required aria-required="true" aria-labelledby="user-id-label" aria-describedby="user-id-format-descrption" autoComplete="off" value={inputUserID}
                        onChange={(event) => handleChangeUserIDInput(event.target.value)}/>
                        <span id="user-id-format-description" className="format-description">
                            Format: Lowercase letters separated by underscores<br/>
                            Ex: firstname_lastname
                        </span>
                    </div>
                    <div className="form-end-buttons">
                        <input className={"form-button " +
                        ((inputUserID === "" || !inputUserID.match(usernameRegex)) ? "button-disabled" : "")}
                        type="submit" value="Login"/>
                    </div>
                </form>
            </section>
        </main>
    );
}