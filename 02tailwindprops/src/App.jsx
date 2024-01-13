import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  // let newArr = [1, 2, 3]  // to pass array into the props we need to create a variable and pass it to the (<Cards />)
  // let myObj = {
  //   username: "sid",
  //   age: 21
  // }
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

     {/* <Cards name="sid" someObj={newArr}/> */}
     <Cards username="sid" btnText="click me"/>
    </>
  )
}

export default App
