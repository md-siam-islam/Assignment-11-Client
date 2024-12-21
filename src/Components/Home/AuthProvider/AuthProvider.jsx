import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../../../Firebase/Firebaseinit';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile,signOut } from 'firebase/auth';

export const Authcontext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const [loading,setLoading] = useState(true)

    const signUp = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email,password)
    }

    const Login = (email,password) => {
        setLoading(true)
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo = (userData) => {
      return updateProfile(auth.currentUser,userData)
    }
    const signoutUser = () => {
        setLoading(true)
        return signOut(auth)
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
        Login,
        userInfo,
        signoutUser,

    }


    return (
        <Authcontext.Provider value={getAuth}>
           {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;