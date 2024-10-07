import { useState } from "react";
import { auth, database } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { push, ref, set } from "firebase/database";



function Chat() {

    const [message, setMessage] = useState('');
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (auth.user != null) {
        setUser(auth.user);
        console.log('USER', user);
    } else {
        console.log('USER Not Logged In');
    }


    const saveMessage = async () => {


        const userRef = ref(database,'chats');

        await set(push(userRef),{
            message:message,
            uid:user.uid,
        });


    };

    const login = async () => {

        try{
            const result = await signInWithEmailAndPassword(auth,email,password);
            setUser(result.user);
        }catch(e){

        }

    };





    return (
        <div>
            {
                user ?
                    <div>
                        <textarea placeholder="Enter Message" value={message} onChange={(m) => { setMessage(m.target.value) }}></textarea>
                        <button onClick={saveMessage}>Send Message</button>
                    </div>
                    :
                    <div>
                        <input placeholder="Enter Email" value={email} onChange={(p) => { setEmail(p.target.value) }} />
                        <input placeholder="Enter Password" type="password" value={password} onChange={(p) => { setPassword(p.target.value) }} />
                        <button onClick={login}>Log In </button>
                    </div>
            }
        </div>
    );

};

export default Chat;