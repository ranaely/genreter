import React, { useCallback, useEffect, useRef, useState } from "react";
import { Tag } from "../Tag";





function App() {
  const[length, setLength]=useState(0)
  const[number, setNumber]=useState(false);
  const[charcter, setCharcter]=useState(false)
  const[password, setPassword]=useState("")

 const passwordRef = useRef()
const passwordGenertor= useCallback(()=>{
let pass = " "
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if (number) str += "0123456789";
if (charcter) str += "!@#$%^&*()_+-={}[]\\|;:'\",<.>/?"

for (let i = 1 ; i<=length; i++){

let char = Math.floor(Math.random()* str.length+1)

pass+= str.charAt(char)
}
setPassword(pass)
}

,[number, charcter,length, password]
)

const clipboard1 =useCallback(()=>{



window.navigator.clipboard.writeText(password)



})

  
  
  
//   useEffect(()=>{
// passwordGenertor();
// },[length,number,charcter,passwordGenertor])



  return( 

    
  <div>
<div className="body">
<h1 className="h1">Password Genretor</h1>

<div className="div1">
<input type="text" className="input1" placeholder="Password" value={password} ref={passwordRef} readOnly  />

<button className="btn-generate" onClick={clipboard1}>Copy</button>

<button className="btn-generate"  onClick={passwordGenertor}>Genreter</button>
</div>
<div className="main-div" >
<div >
<label htmlFor="rango">Select Your Lenght :{length}</label>
<input type="range" className="input2"  id="range" min={3} max={8} value={length} onChange={(e)=>setLength(e.target.value)}/>


</div>
<div >

<input type="checkbox" className="input3" id="Number"  defaultChecked={number} onChange={()=>{setNumber(prev=>!prev)}}/>
<label htmlFor="Number" >Number</label>

</div>
<div>

<input type="checkbox" className="input4" id="Character" defaultChecked={charcter} onChange={()=>{setCharcter(prev=>!prev)}}/>
<label htmlFor="Character" >Charcter</label>

</div>
</div>


</div>
    <div>
<input type="text" className="input1" placeholder="Password" value={password} ref={passwordRef} readOnly  />

<button className="btn-generate" onClick={clipboard1}>Copy</button>

<button className="btn-generate"  onClick={passwordGenertor}>Genreter</button>
</div>
<Tag/>
  </div>
  
  
  
  )
}

export default App;
