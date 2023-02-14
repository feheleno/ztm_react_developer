import { createContext, useState } from "react";

// as the actial value we want to access
export const UserContext = createContext({
    currentUser: null,
    seteCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, seteCurrentUser] = useState(null);
    const value = { currentUser, seteCurrentUser };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};