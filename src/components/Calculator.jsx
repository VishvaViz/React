import React from 'react'

function Input(){
  const[input,setInput]=React.useState("0")
  return <div>
    <input onChange={(e)=>{
      setInput(e.target.value)
    }} value={input}></input>
    <table align='center'>
      <tr>
        <td>
          <button onClick={()=>{
            const a=input+"9"
            setInput(a)}}>9
          </button>
        </td>
        <td>
          <button onClick={()=>{
              const a=input+"8"
              setInput(a)}}>8
          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=input+"7"
            setInput(a)}}>7
          </button>
        </td>
        <td>
          <button onClick={()=>{
            setInput('')}}>Del
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button onClick={()=>{const a=input+"6"
              setInput(a)}}>6
          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=input+"5"
            setInput(a)}}>5
          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=input+"4"
            setInput(a)}}>4
          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=input+"+"
            setInput(a)}}>+
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button onClick={()=>{
              const a=input+"3"
              setInput(a)}}>3
          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=input+"2"
            setInput(a)}}>2
          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=input+"1"
            setInput(a)}}>1
          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=input+"-"
            setInput(a)}}>-
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button onClick={()=>{
            const a=input+"0"
            setInput(a)}}>0
          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=input+"*"
            setInput(a)
          }}>*
          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=input+"/"
            setInput(a)
          }}>/

          </button>
        </td>
        <td>
          <button onClick={()=>{
            const a=eval(input)
            setInput(a)
          }}>=

          </button>
        </td>
      </tr>
    </table>
  </div>
}

export default Input