import React from "react";
import './style.css'
class Test1 extends React.Component{
    state=[
        {name:"aaa",id:101,gen:"male"},
        {name:"bbb",id:102,gen:"female"},
        {name:"ccc",id:103,gen:"male"},
        {name:"ddd",id:104,gen:"female"}

    ]
    render(){
        return this.state.map((val)=>{
            return <div className="card">
                <div className="container">
                    <h1>Name:{val.name}</h1>
                    <h1>ID:{val.id}</h1>
                    <h1>Gen:{val.gen}</h1>
                </div>
            </div>
        
        })
        
    }
}
export default Test1 