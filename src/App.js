import React,{useState,useEffect} from 'react';
import './App.css';
import UserDetail from './UserDetail';

/*  
fetch("http;//randomuser.me/api/")
  .then(response => response.json())
.then (data => {console.log(data)}

Fetch is a built-in JavaScript function that retrieves data from an API.
 In this example, the fetch function is used to retrieve information 
 from the "randomuser.me" API and convert it
  into JavaScript Object Notation (JSON).
   The then() functions are used to define what should happen to the response once retrieved.
    Within these two functions, the response and data can be accessed respectively.
     Finally, the data is being logged out in the console so it can be viewed by developers.
     */
function App() {
  // const contacts =[
  //   {
  //     avatarUrl :  "https://via.placeholder.com/150",
  //     name : "John Doe",
  //     email : "example@email.com",
  //     age : 24,
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "Tony Stark",
  //     email : "tonystark@email.com",
  //     age  : 42
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "Wonder Women",
  //     email : "wonderwomen@email.com",
  //     age  : 29
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "Captain America",
  //     email : "captainamerica@email.com",
  //     age     : 34,
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "Peter Parker",
  //     email : "peterparker@email.com",
  //     age  : 33,
  //   },
  //   {
  //     avatarUrl :  "https://via.placeholder.com/150",
  //     name : "Mahesh Babu",
  //     email : "example@email.com",
  //     age : 40,
  //   },
  // ];
  const [results, setResults]=useState([]);
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data =>{
     console.log(data);
     setResults(data.results);
    });
  },[]);
 return(
  <div>
  {results.map((result, index)=>{
    return(
      <UserDetail 
      key={index}
      avatarUrl={result.picture.large}
      name={result.name.first}
      email={result.email}
      age = {result.dob.age}
    />
    );
  })}
    {/* <UserDetail 
    avatarUrl="https://via.placeholder.com/150"
      name="John Doe"
      email="example@email.com"
      age = {24}
    />
        <UserDetail 
    avatarUrl="https://via.placeholder.com/150"
      name="Tony Stark"
      email="tonystark@email.com"
      age = {42}
    />
        <UserDetail 
    avatarUrl="https://via.placeholder.com/150"
      name="Wonder Women"
      email="wonderwomen@email.com"
      age = {29}
    />
        <UserDetail 
    avatarUrl="https://via.placeholder.com/150"
      name="Captain America"
      email="captainamerica@email.com"
      age = {34}
    />
        <UserDetail 
    avatarUrl="https://via.placeholder.com/150"
      name="Peter Parker"
      email="peterparker@email.com"
      age = {33}
    /> */}
  </div>
 );
}

export default App;
