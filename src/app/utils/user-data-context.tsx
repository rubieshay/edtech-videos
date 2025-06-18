"use client";

import { createContext, useEffect, useState } from "react";
import { UserContextType } from "./types";

export const UserDataContext = createContext<UserContextType>({currentUserID: null, setCurrentUserID: () => {}});

export function UserDataProvider({ children }: Readonly<{children: React.ReactNode;}>) {

    const [currentUserID, setCurrentUserID] = useState<string | null>(null);

    useEffect(() => {
        setCurrentUserID("rubie_shay");
    }, []);

    return (
        <UserDataContext.Provider value={{ currentUserID, setCurrentUserID }}>
            {children}
        </UserDataContext.Provider>
    );
}