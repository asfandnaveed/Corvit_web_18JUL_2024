import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebaseConfig.js";


function FirebaseAuth (){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const registerUser = async ()=>{

        try{

            const result = await createUserWithEmailAndPassword(auth,email,password);
            console.log("USER",result.user);

        }catch(e){
            console.log("ERROR",e);
        }

    };


    return(


        <div>
            <h1>FIREBASE REGISTERATION FORM</h1>
            {/* <form onSubmit={}> */}
                <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Enter Password" value={password} onChange={(p)=>{setPassword(p.target.value)}}/>
                <button type="submit" onClick={registerUser}> Register</button>
            {/* </form> */}
        </div>

    );

};


export default FirebaseAuth;