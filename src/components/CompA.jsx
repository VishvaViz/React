import React from "react";
import CompC from "./CompC";


class CompA extends React.Component{
    render(){
        return <div>
            <h1>Component A</h1>
            <CompC b = "componenta" />
        </div>
         
        
    }
}
export default CompA;