import React from 'react'
import {useEffect }from 'react'
import { useState } from "react";
import {useParams} from 'react-router-dom'

const TeamMemberPage = () => {
  const {memberId}=useParams()
   const [user,setUser]=useState([]);
   const[loading,setLoading]=useState(false)
   useEffect(()=>{

    const getUser=async()=>{
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${memberId}`);
        const user=await res.json()
        setUser(user)
        
      }finally{
        setLoading(false)
      }

    }

    getUser()
  },[memberId])
  

  if (loading) {

     return 'loading...'
  }
  
  return (
    <div>
      <h1>{user.name}</h1>
      <address>
        {user.address?.street} {user.address?.city}
      </address>
      <a href={`tel:${user.phone}`}>{user.phone}</a>
    </div>
  );
}

export default TeamMemberPage