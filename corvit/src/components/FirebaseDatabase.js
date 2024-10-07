import { ref, set } from "firebase/database";
import { database } from "../config/firebaseConfig";


function FirebaseDatabase(){



    const InsertData = async()=>{

        const userRef = ref(database,'users/user2');
        await set(userRef,{
            email:"test@gmail.com",
            name:"test",
            address:"Lahore Paksitan",
            age:40,
            phoneNumber:"+9200000000"
        });

    };



    return(
        <div>
            <button onClick={InsertData}>Insert Data</button>
        </div>
    );

};


export default FirebaseDatabase;