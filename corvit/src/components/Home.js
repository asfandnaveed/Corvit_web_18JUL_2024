import React, { useEffect, useState } from "react";


function Home(){

    const url ="https://localhost:5015/api/v1/users/";

    const [users,setUser] = useState([]);

    useEffect(()=>{
        const fetchUsers = async ()=>{
            const result = await fetch(url);

            const usersData = result.json();
            setUser(usersData);
        }

        fetchUsers();
    },[]);


    CORS



    return(
        <div>
            <h1>Welcome to HomePage</h1>
            <p>This is Home Page </p>
            <div>
                {users.map((data)=>(
                    <h1>{data.email}</h1>
                ))}
            </div>
        </div>
    );
}

export default Home;