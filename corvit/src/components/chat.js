import { useEffect, useState } from "react";
import { auth, database, storage } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onValue, push, ref, set } from "firebase/database";
import {ref as stRef, uploadBytes} from "firebase/storage";



function Chat() {

    const [message, setMessage] = useState('');
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [chats , setChats] = useState([]);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    

    useEffect(()=>{

        // if(auth.currentUser){
        //     setUser(auth.currentUser);
        //     console.log('User Logged In',user.uid);
        // }else{
        //     console.log('User Not Logged In');
        // }


        const userRef = ref(database,'chats');

        onValue(userRef, (snapshot)=>{
            const data = snapshot.val();
            if(data){
                const chatList = Object.values(data);
                setChats(chatList);
            }
        });


    },[user]);



    const setImageData = (e)=>{
        if(e.target.value[0]){
            setImage(e.target.value[0]);
        }
    };


    const saveMessage = async () => {


        const userRef = ref(database, 'chats');

        await set(push(userRef), {
            message: message,
            uid: user.uid,
        }).then(()=>{
          
        });


    };

    const login = async () => {

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
        } catch (e) {

        }

    };

    const uploadImage = async()=>{

        if(image){

            try{

                const storageRef = stRef(storage,`chatImages/${image.name}`);

                await uploadBytes(storageRef,image);

            }catch(e){
                console.log('Error',e);
            }

        }else{
            console.log("Image not selected");
        }

    };





    return (
        <div>
            {
                user ?
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2" style={{height:'600px'}}>
                                <div className="w-100 h-100 border p-2 shadow rounded" style={{overflowY:'scroll'}}>
                                    {/* CHAT BOX */}

                                    {
                                        chats.map((c,index)=>(
                                            <div key={index} className={`rounded-pill p-2 m-1 text-white ${c.uid == user.uid? 'bg-success ms-auto' : 'bg-info me-auto' }`} 
                                            style={{maxWidth:'40%',textAlign: c.uid==user.uid? 'right' : 'left'}}>
                                                {c.message}
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className="col-12 mt-2 d-flex justify-content-between">
                                <input placeholder="Enter Message" className="form-control" value={message} onChange={(m) => { setMessage(m.target.value) }} />
                                <button className="btn btn-success" onClick={saveMessage}>Send Message</button>
                                <input type="file" onChange={setImageData} />
                                <button onClick={uploadImage}>Upload Image</button>

                            </div>
                            
                        </div>
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