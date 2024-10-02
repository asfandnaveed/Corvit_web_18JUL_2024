import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebaseConfig";


function GoogleSignIn() {

    const [user, setUser] = useState(null);

    const googleAuth = new GoogleAuthProvider();

    const GoogleAuth = async () => {

        try {
            const result = await signInWithPopup(auth, googleAuth);
            const credentials = GoogleAuthProvider.credentialFromResult(result);


            setUser(result.user);
            console.log("GOOGLE account", result.user);

        } catch (e) {

            console.log("Error", e);
        }

    };

    const SignOut = async()=>{
        auth.signOut();
    };




    return (
        <div>
            

            {
                user?
                <div>
                     <h1>{user.email}</h1>
                    <p>{user.displayName}</p>
                    <img src={user.photoURL} />
                </div>
                    :
                    <button onClick={GoogleAuth}>Sign In With Goolge</button>
            }

            

            
        </div>
    );

};


export default GoogleSignIn;
