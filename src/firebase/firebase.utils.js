import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhKDAfMDCSI41icsvQr1g2JudrFBH_gF8",
    authDomain: "crwn-db-75cec.firebaseapp.com",
    projectId: "crwn-db-75cec",
    storageBucket: "crwn-db-75cec.appspot.com",
    messagingSenderId: "361117363900",
    appId: "1:361117363900:web:c258f7e6ede503ce896ab9",
    measurementId: "G-X47Z4DE2PD"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            )
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;