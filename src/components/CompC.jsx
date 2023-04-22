import React from "react";

class CompC extends React.Component{
    constructor(props){
        super(props);
        // this.props = a
    }
    render(){
        console.log(this.props)
        return <div>
                <h1>ComponentC</h1>
                <hr />
                {/* <h1><pre>{JSON.stringify}</pre></h1> */}
                <p>I am child of {this.props.b}</p>
        </div>
    }
}
export default CompC;