import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../../../Firebase/Firebaseinit';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export const Authcontext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const [loading,setLoading] = useState(true)

    const signUp = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email,password)
    }


    useEffect(()=>{
      const data =  onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser || null)
            setLoading(false)
        })

        return () => {
            data()
        }
    },[])
    const getAuth = {
        user,
        setUser,
        loading,
        setLoading,
        signUp,

    }


    return (
        <Authcontext.Provider value={getAuth}>
           {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;