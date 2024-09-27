import { useState } from "react";

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const LoginUser = async (event)=>{

        event.preventDefault();
        const data = {email,password};

        try{
            const loginUrl = "http://localhost:5012/api/v1/user/login";

            const result  = await fetch(loginUrl,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data)
            });

            const response = await result.json();

            console.log('USER',response);

        }catch(e){
            console.log('Error',e);
        }
    };

    return (
        <div>
            <form onSubmit={LoginUser}>
                <input type="email" placeholder="Enter Email" value={email} onChange={(em)=> setEmail(em.target.value)}/>
                <input type="password" placeholder="Enter Password" value={password} onChange={(pass)=> setPassword(pass.target.value)}/>
                
                <button type="submit">Login</button>
            </form>
        </div>
    );



}

export default Login;