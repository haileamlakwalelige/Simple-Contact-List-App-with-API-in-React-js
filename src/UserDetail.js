import React,{useState} from 'react';

function UserDetail(props){
    const [showAge, setShowAge]=useState(false)
    const handleAge =()=>{
        if(!showAge){
        setShowAge(true)
        }else {
        setShowAge(false)
    }
}
    return (
        <div className="contact-card">
        <div className="img">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
         <img 
         src={props.avatarUrl} 
         alt="profile picture" >
         </img>
         </div>
         <div className="user-details">
         <p>Name: {props.name}</p>
         <p>Email: {props.email}</p>
         <button onClick={()=>handleAge()}  className={showAge ? "button2":"button1"}>{showAge ? "Hide Age" : "Show Age"}</button>
         {showAge ? <p>Age: {props.age}</p>  :null}
         </div>
        </div>
      );
}


export default UserDetail; 