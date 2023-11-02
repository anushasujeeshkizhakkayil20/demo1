
import './Example.css'
import Style from '../myStyle.module.css'
import { useState } from 'react';

function Example({subject}){
    //jscode
  const [concept, setConcept]=useState("React js")
  // console.log(concept);
 const[user,setUser] = useState("")

   const userArray=[
    {username:'Max',age:'23'},
    {username:'Max Millar',age:'25'},
    {username:'Manu',age:'28'},
    {username:'Manua;',age:'30'},
    {username:'Mini',age:'33'},

   ]
   const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(`username is ${user}`);
   }


    return(
      //jsx
      <>
      {subject==='React' &&
      <div className='divStyle'>
        <h1>inside the example function component</h1>
        <h3>Subject is : <span className={Style.reactsubject}>{subject}</span></h3>
      </div>}
      <h3>Example component state is:{concept}</h3>
      <button onClick={()=>setConcept('Angular')} type='button' style={{backgroundColor:'blue',color:'white',padding:'10px',margin:'10px'}}>valuechange</button>

    <div>
      <table>
        <thead>
          <tr>
            <th>SL NO:</th>
            <th>USERNAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {
            userArray.map((item,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{item.username}</td>
                <td>{item.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
     <div style={{marginTop:'10px'}}>
     <form onSubmit={handleSubmit}>
       <label htmlFor="username">Username</label>
       <input id='username' value={user} onChange={(e)=>setUser(e.target.value)} type='text' placeholder='username please' style={{width:'400px',padding:'10px',margin:'10px',borderRadius:'10PX'}}/>
       <input type="submit"  style={{backgroundColor:'blue',color:'white',padding:'10px',margin:'10px'}}/>
     </form>
     </div>


      </>

    )
    
}
export default Example;