"use client";

import { createContext, useState } from "react";
import { UserContextType } from "./types";

export const UserDataContext = createContext<UserContextType>({currentUserID: null, handleSetCurrentUserID: () => {}});

export function UserDataProvider({ children }: Readonly<{children: React.ReactNode;}>) {
    // This provider gives the current user_id which is logged in to all of the components, and lets the userID be set on the login page

    const [currentUserID, setCurrentUserID] = useState<string | null>(null);

    function handleSetCurrentUserID(newUserID: string | null) {
        if (newUserID === null) {
            setCurrentUserID(null);
            return;
        }
        setCurrentUserID(newUserID.toLowerCase());
    }

    return (
        <UserDataContext.Provider value={{ currentUserID, handleSetCurrentUserID }}>
            {children}
        </UserDataContext.Provider>
    );
}