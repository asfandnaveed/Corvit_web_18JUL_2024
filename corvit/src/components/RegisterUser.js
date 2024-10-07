import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, database } from "../config/firebaseConfig";
import { ref, set } from "firebase/database";



function RegisterUser() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [name, setName] = useState('');

    const [error, setError] = useState('');


    const Register = async () => {

        try {

            const result = await createUserWithEmailAndPassword(auth, email, password);

            if(result.user.uid !=null){

                const userRef = ref(database,'users/'+result.user.uid);

                await set(userRef,{
                    email:email,
                    address:address,
                    age:age,
                    name:name
                });
            }


        } catch (e) {
            console.log("Error", e);
            // setError(e);
        }


    };



    return (
        <div>
            <div>{error}</div>

            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => { setName(e.target.value) }} />
            <input type="text" placeholder="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <input type="text" placeholder="Enter Address" value={address} onChange={(e) => { setAddress(e.target.value) }} />
            <input type="number" placeholder="Enter Age" value={age} onChange={(e) => { setAge(e.target.value) }} />

            <button onClick={Register}>Register User</button>

        </div>
    );

};

export default RegisterUser;