import './App.css';
import React, { useState, useEffect } from 'react'
import ProfileCard from './Components/ProfileCard';


function App() {
  const [users, setUsers] = useState([]);
  
  //Fetching data from API
  const getResponse = async () => {
    const response = await fetch('https://reqres.in/api/users')
    const output = await response.json();
    setUsers(output.data)
    console.log(users);
  }
  //Running the API function as soon as the page gets loaded
  useEffect(getResponse, [])

  return (
    <div className="App">
        {users.map((user)=>(
          <ProfileCard 

          />
          ))}
    </div>
  );
}

export default App;
