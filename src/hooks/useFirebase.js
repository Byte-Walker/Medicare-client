import initFirebaseApp from '../Firebase/Firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from 'firebase/auth';

import { useEffect, useState } from 'react';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    initFirebaseApp();
    const auth = getAuth();

    // Google sign in
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setError('');
        return signInWithPopup(auth, googleProvider);
            
    };

    // Email sign up
    const emailSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    setError('Account already exists with this email.');
                } else if (error.code === 'auth/weak-password') {
                    setError('Password has to be at least 6 characters long');
                }
            });
    };

    // Update display name
    const update = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                console.log('Profile updated');
                console.log(name);
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    // Email sign in
    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Keep the signed in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);

    // SignOut user
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error.code);
            });
    };

    return { user, setUser, error, setError, googleSignIn, emailSignUp, emailSignIn, update, signOutUser };
};

export default useFirebase;
