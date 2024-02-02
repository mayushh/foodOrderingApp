import React, { useState } from 'react'
const Profile = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>{
        setCount(count + 1);
        }} style={{width:"40px",height:"20px"}}>button</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Profile