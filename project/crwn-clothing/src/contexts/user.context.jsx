import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebse.utils';

// as the actial value we want to access
export const UserContext = createContext({
    currentUser: null,
    seteCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, seteCurrentUser] = useState(null);
    const value = { currentUser, seteCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            seteCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};