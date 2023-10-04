import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => null);
    const [isLoading, setIsLoading] = useState(() => true);

    const loginWithGoogle = () => {
        setIsLoading(() => true);
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithGithub = () => {
        setIsLoading(() => true);
        return signInWithPopup(auth, githubProvider);
    }

    const createNewUser = (email, password) => {
        setIsLoading(() => true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setIsLoading(() => true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const forgetPassword = (email) => {
        setIsLoading(() => true);
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        setIsLoading(() => true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(() => currentUser);
            setIsLoading(() => false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        isLoading,
        createNewUser,
        loginUser,
        forgetPassword,
        loginWithGoogle,
        loginWithGithub,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;