import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/Firebse.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
const Auth = auth;


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);


    const createUserWithEmail = (email, password) => {
        setLoader(false);
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const login = (email, password) => {
        setLoader(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(false);
        return signOut(auth)
    }

    const uploadProfile = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(true);
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const information = { user, createUserWithEmail, logOut, login, loader, uploadProfile }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}