import React,{useState} from 'react'

 function Register() {
   const [userData , setUserData] = useState({
       uname:"",
       mail :"",
       gender:"",
       course:""

   })
   const getUserData = (e)=>{
    //console.log(e.target);
    const {name,value}=e.target
    console.log(name,value);
    setUserData({...userData,[name]:value})
   }
   console.log(userData);
     
   const handleSubmit =(e)=>{
    e.preventDefault()
    alert(`student name is:${userData.uname}
    student email is:${userData.mail}
    student gender is:${userData.gender}
    student course is:${userData.course}`)
   }


  return (
    <div style={{marginTop:'10px',textAlign:'center'}}>
        <h1>Student Registeration form</h1>

        <form onSubmit={handleSubmit}>
        <div style={{marginTop:'10px'}}>
            <label htmlFor="sname" style={{fontSize:'20px'}}>Name</label>
          <input name="uname" onChange={(e)=>getUserData(e)} placeholder='enter your name' style={{width:'400px',padding:'10px',margin:'10px',borderRadius:'10px'}} />
        </div>
        <div style={{marginTop:'10px'}}>
            <label htmlFor="email" style={{fontSize:'20px'}}>Email</label>
          <input id="email"  name="mail" onChange={(e)=>getUserData(e)} placeholder='enter your mail id' style={{width:'400px',padding:'10px',margin:'10px',borderRadius:'10px'}} />
        </div>


        <div style={{marginTop:'10px'}}>
          <label htmlFor="">Gender</label>
        <input id="Male"  name="gender"   type="radio" value={'Male'}  onChange={(e)=>getUserData(e)} />
        <label htmlFor='male'>Male</label>
        <input id="Female" name="gender"type="radio" value={'Female'} onChange={(e)=>getUserData(e)} />
        <label htmlFor='Female'>Female</label>
        <input id="Others" name="gender" type="radio" value={'Others'}  onChange={(e)=>getUserData(e)}/>
        <label htmlFor='Others'>Others</label>

        
        </div>

         <div style={{marginTop:'10px'}}>
          <label htmlFor="Course" style={{fontSize:'20px'}}>Course :</label>
         <select name="" id="" style={{width:'400px',padding:'10px',margin:'10px',borderRadius:'10px'}}>
          <option disabled hidden selected>Choose from the list</option>
          <option value="Biology">Biology</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Humanities">Humanities</option>
          <option value="Commerce">Commerce</option>
          </select>
          </div>
          <div>
            <input type="submit" style={{backgroundColor:'black',color:'white',padding:'20px',margin:'20px', borderRadius:'10px'}}/>
          </div>
        </form>

    </div>
  )
}
export default Register
