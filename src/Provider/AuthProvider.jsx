import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import collegzyApp from '../Firebase/Firebase.config';




export const AuthContext = createContext(null)
const auth = getAuth(collegzyApp)


const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [loading,setloading] = useState(true) 

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()

const createUser = (email, password) =>{
    setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () => {
        setloading(true);
        return signInWithPopup(auth, googleProvider)
    };
    const gitSignIn = () =>{
        setloading(true)
        return signInWithPopup(auth, gitProvider)
    }

  const logout = () =>{
    setloading(true)
    return signOut(auth);
  } 

useEffect(()=>{
const unsub = onAuthStateChanged(auth,loggedUser =>{
    
    setUser(loggedUser)
    setloading(false)
})
return () =>{
    unsub()
}

},[])

 
    const authInfo = {
        user,
        createUser,
        signinUser,
        logout,
        loading,
        googleSignIn,
        gitSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;