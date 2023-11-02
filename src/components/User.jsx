import React, { useState } from 'react'

function User(props) {
  console.log(props);
  
  const [color,setColor] = useState({
    first:'RED',
    second:'BLUE',
    third:'GREEN'

  })

   const divStyle = {
  textAlign:"center",
  backgroundColor:"yellow",
  padding:"10px",
  margin:"40px"
}

 return (
    <div style={divStyle}>
      <h1>Inside user functional component</h1>
      {props.uname==='max well' ?
      <h3>Username is:{props.uname}</h3>:
      <p>user not found</p>}
      <h3>User age:{props.age}</h3>
      <ul>
        <li>{color.first}</li>
        <li>{color.second}</li>
        <li>{color.third}</li>

      </ul>
      <button onClick={()=>setColor({...color,second:'yellow'})} type='button' style={{backgroundColor:'blue',color:'white',padding:'10px',margin:'10px'}}>value change</button>
    </div>
  )
}

export default User