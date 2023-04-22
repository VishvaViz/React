import React from "react";

class Test extends React.Component{
    state={
        counter:0,
        // value:0
    }
    inHandler=()=>{
        this.setState({counter:this.state.counter+1})
        // this.setState({value:this.state.value+2})
    }
    deHandler=()=>{
        this.setState({counter:this.state.counter-1})
        // this.setState({value:this.state.value-2})
    }
    render(){
        return <div>
            <button onClick={this.inHandler}>Increment</button>
            {/* <h1>Counter:{this.state.counter}</h1> */}
            <input type="text" value={this.state.counter}></input>
            {/* <h1>Value:{this.state.value}</h1> */}
            <button onClick={this.deHandler}>Decrement</button>
        </div>
    }
}
// function Test(){
//     const[state,setstate]=useState({counter:0})
//     const incrHandler=()=>{
//         setstate({counter:state.counter+1})
//     }
//     const decrHandler=()=>{ 
//         setstate({counter:state.counter-1})
//     }
//     const delHandler=()=>{
//         setstate({counter:state.counter=" "})
//     }
//     return <div>
//         <button onClick={incrHandler}>Incre</button>
//         <input type="text" value={state.counter}></input>
//         <button onClick={decrHandler}>Decre</button>
//         <button onClick={delHandler}>Clear</button>
//     </div>
// }

export default Test;