import './App.css';
import React, { useState, useEffect } from 'react'
import ProfileCard from './Components/ProfileCard';


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
        {users.map((user)=>(
          <ProfileCard 
              key={user.id}
             fname={user.first_name}
             lname={user.last_name}
             imageURL={user.avatar}
             email={user.email}
          />
          ))}
    </div>
  );
}

export default App;
