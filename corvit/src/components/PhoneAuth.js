import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebaseConfig";


function PhoneAuth() {

    const [user, setUser] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationId,setVerificationId] = useState(null);


    const setupRecaptcha = () => {

        window.RecaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (r) => {
                console.log("Captha Verified", r);
            }
        });

    };

    const sendOtp = async () => {

        setupRecaptcha();

        try{

            const appVerifer = window.RecaptchaVerifier;
            const credantials = await signInWithPhoneNumber(auth,phoneNumber,appVerifer);

            setVerificationId(credantials.verificationId);

            console.log("OTP sent to User");

        }catch(e){
            console.log("error",e);
        }

    };



    return (
        <div>
            <div id="sign-in-button"></div>
            <input type="text" placeholder="+92000" value={phoneNumber} onChange={(v) => { setPhoneNumber(v.target.value) }} />
            <button onClick={sendOtp}>Sign In With PhoneNumber</button>
        </div>
    );



};

export default PhoneAuth;