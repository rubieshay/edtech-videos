"use client";

import { useContext } from "react";
import { UserDataContext } from "../../utils/user-data-context";
import LoggedOutPage from "../../logged-out-page";
import HeaderNav from "../../header-nav";
import { NavPage } from "../../utils/constants";

export default function ContentStudioLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    // This layout is used for most of the app, and contains the navigation header
    // This version highlights Content Studio in the navbar

    // If the userID is ever null, it also gives you message to login
    const { currentUserID } = useContext(UserDataContext);

    if (currentUserID === null) {
        return (
            <LoggedOutPage/>
        );
    } else {
        return (
            <>
                <header>
                    <HeaderNav activeLink={NavPage.contentStudio}/>
                </header>
                {children}
            </>
        );
    }
}