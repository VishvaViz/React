import React from "react";
import './style.css'
function Testtest(){
    const [name,setName]=React.useState('')
    const [id,setId]=React.useState(0)
    const [description,setDescription]=React.useState('')
    const [data,setData]=React.useState([])
    return <div>
        <input onChange={(e)=>{
            setName(e.target.value)
        }} value={name}></input>
        <input onChange={(e)=>{
            setId(e.target.value)
        }} value={id}></input>
        <input onChange={(e)=>{
            setDescription(e.target.value)
        }}value={description}></input>
        <button onClick={()=>{
            let a=[...data]
            let b={}
            b.name=name;
            b.id=id;
            b.description=description;
            a.push(b)
            setData(a)
            setName('')
            setDescription('')
            setId(0)
        }}>Push</button>
        {data.map((i)=>{
            return <div className="card">
                    <div className="container">
                        <h2>Name:{i.name}</h2>
                        <h2>ID:{i.id}</h2>
                        <h2>Description:{i.description}</h2>
                    </div>
                </div>
        })}

    </div>
}
export default Testtest;