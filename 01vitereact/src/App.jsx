import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15;

  // const addValue = () => {
  //   counter = counter + 1;
  //   console.log("clicked", counter);
  // }

  // all the above code updates the variable in the console but not in the ui

  let [counter, setCounter] = useState(10)  // we have to pass default value of the variable
  
  // This is the use of React Hooks. It is used when we have to update a UI element in different places. But many a times it a overkill.

  // const addValue = () => {
  //   setCounter(counter+1);
  //   console.log("clicked", counter);
  // }
  
  // const removeValue = () => {
  //   setCounter(counter-1); 
  //     console.log("clicked", counter);
  //   }


  // ASSIGNMENT 1 TO MAKE A COUNTER FROM 0 - 20
    function increment() {
      setCounter((p) => {
        while(p<20){
          return p+1;
        }
        return p;
      });
    }
  
    function decrement() {
      setCounter((p) => {
        while(p>0){
          return p-1;
        }
        return p;
      });
    }
    


    return (
    <>
    <h1>Hello World</h1>
    <h2>Counter: {counter}</h2>

    <button onClick={increment}>Add Value</button>
    <button onClick={decrement}>Remove Value</button>
    </>
  )
}

export default App
