import React from "react";
import CompC from "./CompC";

class CompB extends React.Component{
    render(){
        return <div>
            <h1>Component B</h1>
            <CompC b="ComponentB"/>
        </div>
    }
    
}

export default CompB