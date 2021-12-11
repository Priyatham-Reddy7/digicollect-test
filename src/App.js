import './App.css';
import React, { useState, useEffect } from 'react'
import ProfileCard from './Components/ProfileCard';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  const [users, setUsers] = useState([]);
  
  //Fetching data from API
  useEffect(() =>{
    const getResponse = async () =>{
    const response = await fetch('https://reqres.in/api/users')
    const output = await response.json();
    setUsers(output.data)}   
    getResponse();
  }, [])

  return (
    <div className="App">
    <Navbar />
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">         
                  {users.map((user)=>(
                    <ProfileCard 
              key={user.id}
              fname={user.first_name}
              lname={user.last_name}
              imageURL={user.avatar}
              email={user.email} />                  
          ))} 
          {/*Calling it twice to double the contact information*/}
          {users.map((user)=>(
                    <ProfileCard 
              key={user.id}
              fname={user.first_name}
              lname={user.last_name}
              imageURL={user.avatar}
              email={user.email} />                  
          ))}                    
         </div>
       </div>
     </section>
    <Footer /> 
  </div>
  );
}

export default App;
