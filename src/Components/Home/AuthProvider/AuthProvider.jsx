import React from 'react';
import { createContext } from 'react';
export const Authcontext = createContext()
const AuthProvider = ({children}) => {


    const getAuth = {

    }


    return (
        <Authcontext.Provider valu={getAuth}>
           {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;