// import React, { useEffect } from "react";
// import './style.css'
// // class Event extends React.Component{
    
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //         input:''
// //     }
// //     };
// //     changeHandler = (e)=>{
// //         this.state.input= e.target.value
// //         console.log("function is getting")
// //     }
// //     render(){
// //         console.log(this.state.input)
// //         return <div>
// //             <input type="text" onChange={this.changeHandler} value={this.state.input}></input>
// //         </div>
// //     }
// // }
// function Event(){
//     const [firstName, setFirstName] = React.useState('');
//     const [description,setDescription]=React.useState('')
//     const [id,setId]=React.useState(0)
//     console.log(firstName,description,id)
//     const [data,setData] =React.useState([])
//     useEffect(()=>{console.log("data is changin")},[data])
//     const jsx = data.map((i)=>{
//         console.log(i)
//         return <div key={i.id} className="card">
//             <div className="container">
//                 <h1>Name:{i.name}</h1>
//                 <h1>Gender:{i.description}</ h1>
//                 <h1>ID:{i.id}</h1>
//             </div>
//             </div>
//        })
//     return (
//         <div>
//             <input value={firstName}   onChange={e => {
//                 setFirstName(e.target.value)
//                 console.log(firstName)
//             }}/>
//             <input value={description}  onChange={e=>{
//                 setDescription(e.target.value)
//                 console.log(description)
//             }}/>
//             <input value={id} onChange={e=>{
//                 setId(e.target.value)
//                 console.log(id)
//             }}/>
//             <button onClick={()=>{ 
//                 let a = [...data] 
//                 let b={
 
//                 }
//                 b.name=firstName;
//                 b.description=description;
//                 b.id=id
//                 a.push(b)
//                 setData(a)
//                 console.log(data)
//             }}>Push</button>
            
//                {jsx}
                    
//         </div> 
//     );
// }
// export default Event;
