import React from "react";
class Test2 extends React.Component{
    state=[
        "https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
    chaHandler=()=>{
        this.setState({State:this.state="lakdlkflsdkf"})
    }
    render(){
        const c=this.state.map((val)=>{
            return <div>
                <img src={val}></img>
            </div>
        })
        return <div>
            {c}
                <button onClick={this.chaHandler}>A</button>
        </div>
    }
}
export default Test2 ;