
import './App.css';
import Example from './components/Example';
import Random from './components/Random';
import User from './components/User';
import  Style from'./myStyle.module.css'
import Register from'./components/Register';

function App() {
  //js code
  const subject = 'React'
  const username="Max"
  const show = ()=>{
    alert('button Clicked')
  }
  const add = (user)=>{
    alert(`${user}is added`)
  }
  const changeValue=(e)=>
  console.log(e.target.value);
  return (
    //jsxcode
    
    <>
    <Register/>
    <hr/>
    <h1 style={{textAlign:"center",color:"blue"}}>heading</h1>
     <div className="App">
     <h1>welcome to Reacts</h1>
     <h3>subject is:<span className={Style.colorreact}>{subject}</span></h3>
      <button onClick={show} type='button' style={{backgroundColor:'black',color:'white',padding:'20px',margin:'20px', borderRadius:'10px'}}>click</button>
      <button onClick={()=>add('jennifer')} type='button' style={{backgroundColor:'black',color:'white',padding:'20px',margin:'20px', borderRadius:'10px'}}>ADD</button>
     <div>
      <input  onChange={(e)=>changeValue(e)} type='text' placeholder='enter the username' style={{width:'400px',padding:'10px',margin:'10px', borderRadius:'10px'}}></input>
     </div>


     <ul>
      <li><Example subject = {subject}/></li>
      <li><Random/></li>
      <li><User uname={username} age='30'/></li>


     </ul>
    </div>
    </>
  );
}

export default App;
