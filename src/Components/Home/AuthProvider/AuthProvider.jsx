import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../../../Firebase/Firebaseinit';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile,signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';

export const Authcontext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const [loading,setLoading] = useState(true)

    const provider = new GoogleAuthProvider()

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

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }


    useEffect(() => {
        const data = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || null);
    
            if (currentUser?.email) {
                const email = { email: currentUser.email };
    
                axios.post('http://localhost:5000/jwt', email, { withCredentials: true })
                    .then(res => {
                        console.log("Login successful:", res.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.error("JWT Error:", err.response.data);
                        setLoading(false);
                    });
            } else {
                axios.post("http://localhost:5000/logout",{},{withCredentials:true})

                .then(res => {console.log(Logout,res.data)
                    setLoading(false);
                })
            }
        });
    
        return () => {
            data();
        };
    }, []);
    const getAuth = {
        user,
        setUser,
        loading,
        setLoading,
        signUp,
        Login,
        userInfo,
        signoutUser,
        googleLogin,

    }


    return (
        <Authcontext.Provider value={getAuth}>
           {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;