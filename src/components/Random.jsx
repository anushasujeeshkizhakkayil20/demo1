import React from "react";

class Random extends React.Component{

    //jscode
    constructor(){//initialize property
        super()//acces property
        this.state={cname:'POLO GT'}
    }
    changeState = (data)=>{
        this.setState({cname:data})
    }
    render(){
        return(
            //jsx code
            <div>
                <h1>Inside Random class component</h1>
                <h3>car name is :<span style={{color:'red'}}>{this.state.cname}</span></h3>
                <button onClick={()=>this.changeState('swift')} type="button" style={{backgroundColor:'blue',color:'white',padding:'10px',margin:'10px'}}>Clicl</button>
            </div>
        )
    }
}
export default Random;
