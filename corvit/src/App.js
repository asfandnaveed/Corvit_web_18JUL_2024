
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
// import Home from './components/Home.js'; 
// import About from './components/About.js'; 
// import Navbar from './components/Navbar.js'; 
import { useEffect, useState } from 'react';
import Login from './components/Login.js';
import FirebaseAuth from './components/FirebaseRegister.js';
import GoogleSignIn from './components/GoogleSignIn.js';
import PhoneAuth from './components/PhoneAuth.js';
import FirebaseDatabase from './components/FirebaseDatabase.js';
import RegisterUser from './components/RegisterUser.js';
import Chat from './components/chat.js';

function App() {

  const url = "http://api.weatherapi.com/v1/current.json?key=43297bb031ed4a1898b51508240909&q=Lahore";

  const [temperature , setTemp] = useState();
  const [uv , setuv] = useState();
  const [condition , setCondition] = useState();
  const [users, setUsers] = useState([]);

  useEffect(()=>{

    const getWeatherData = async ()=>{

      const result = await fetch(url);

      result.json().then(data=>{
        console.log(data.current.temp_c);
        console.log(data.current.condition.text);
        setTemp(data.current.temp_c);
        setuv(data.current.uv);
        setCondition(data.current.condition.text);
      });
    }

    const fetchUsers = async () => {
      const UserApiUrl = "http://localhost:5012/api/v1/user/";
      try {
        const result = await fetch(UserApiUrl); // Replace with your API endpoint
       
        const data = await result.json();
        setUsers(data);
        console.log("USER DATA",data);
      } catch (error) {
        
      } 
    };

    fetchUsers();

    getWeatherData();

  },[]);

  return (
    // <Router>
    //  <div>
    //   <Navbar/>
    //  <Routes>
    //     <Route  path='/' Component={Home} />
    //     <Route path='/about' Component={About} />
    //   </Routes>
    //  </div>

    // </Router>


    <div>
    {/* <h1>User List</h1>
    <ul>
      {
      users.map((u)=>(
        <li> {u.email} - {u.phone_no} </li>
      ))
      }
    </ul>
    <Login/> */}
    {/* <FirebaseAuth/> */}
    {/* <GoogleSignIn/> */}
    {/* <PhoneAuth/>
    <FirebaseDatabase/> */}
    {/* <RegisterUser/> */}
    <Chat/>
  </div>
  );
}

export default App;
