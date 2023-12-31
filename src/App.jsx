import { useState } from "react";
function App() {
  const [color, setColor] = useState("green")
 
  return (
    
    <div className=" w-full h-screen flex  justify-center items-center "
    style={{backgroundColor:color}}>
      <h1 className="text-6xl">Hi <span
      style={{color:"purple"}}>Anand Raj ,</span>
      This is my first react project</h1>
      <div className="fixed flex flex-wrap  bottom-12  px-2 bg-white max-w-fit gap-3 text-center rounded-lg py-1"> 
      <button
      onClick={()=> setColor("red")}
      className="px-4 py-1 text-white rounded-full"
      style={{backgroundColor:"red"}}
      >red</button>
      <button
      onClick={()=> setColor("green")}
      className="px-4 py-1 text-white rounded-full"
      style={{backgroundColor:"green"}}>Green</button>
      <button
      onClick={()=> setColor("blue")}
      className="px-4 py-1 text-white rounded-full"
      style={{backgroundColor:"blue"}}
      >Blue</button>
      <button
      onClick={()=> setColor("violet")}
      className="px-4 py-1 text-white rounded-full"
      style={{backgroundColor:"violet"}}>violet</button>
      <button
      onClick={()=> setColor("yellow")}
      className="px-4 py-1 text-white rounded-full"
      style={{backgroundColor:"yellow"}}>Yellow</button>
      <button
      onClick={()=> setColor("magenta")}
      className="px-4 py-1 text-white rounded-full"
      style={{backgroundColor:"magenta"}}>Magenta</button>
      </div> 
    </div>
   
  );
}

export default App
