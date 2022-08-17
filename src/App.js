import React, {useState} from 'react';

const Meme = () =>{
  return(
    <main className={"flex-col w-fit border-gray-400 border-2"}>
      <div className={"flex w-full h-20 bg-purple-500 flex justify-center items-center"}>
        <h1 className={"text-5xl text-white"}>Meme generator</h1>
      </div>
      <div>
        <input type="text" className={"m-3 mt-6 p-1 border-purple-500 border-2 rounded-full"} placeholder={"Top text"}/>
        <input type="text" className={"m-3 mt-6 p-1 border-purple-500 border-2 rounded-full"} placeholder={"Bottom text"}/>
      </div>
      <div>
        <button className={"text-3xl text-purple-700 m-3 w-96 mt-6 p-1 border-purple-500 border-2 rounded-full"} >
            Generate new meme!
        </button>
      </div>
    </main>
  )
}



const Counter = () =>{
  const [counter, setCounter] = useState(0)
  function counterMinus(){
    return(
      setCounter(prevState => prevState -1)
    )
  }
  function counterPlus(){
    return(
      setCounter(prevState => prevState +1)
    )
  }
  return(
    <>
      <div className={"bg-amber-100 w-24 h-24 rounded-full border-2 flex justify-center items-center z-10"}>
        <button className={"text-white text-3xl rounded-full w-10 h-10 bg-gray-600 flex items-center justify-center block z-20 "} onClick={counterMinus}>-</button>
        <h1 className={"text-amber-600 text-3xl content-center"}>{counter}</h1>
        <button className={"text-white text-3xl rounded-full w-10 h-10 bg-gray-600 flex items-center justify-center block z-20"} onClick={counterPlus}>+</button>
      </div>
    </>
  );
}

const Test = () =>{

  const [isImportant, setIsImportant] = useState("Yes!")

  function handleClick(){
    if (isImportant === "Yes!"){
      return (setIsImportant("NO"))}
    else
      return(setIsImportant("Yes!"))
  }

  return(
    <div onClick={handleClick}>
      <h1 className={"text-red-700"}>Is state important to know?</h1>
      <div >
        <h1>{isImportant}</h1>
      </div>
    </div>
  )
}

const App = () =>{
  return(
    <>
      <Test/>
      <Counter/>
      <Meme/>
    </>
)
}

export default App;