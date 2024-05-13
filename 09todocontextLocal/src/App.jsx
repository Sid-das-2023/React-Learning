import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App








  // const[todos, setTodos] = useState([]); 
  // // we are keeping empty array as the thing we are going to work on i.e, is the todos which is infact an array

  // // now we have to define the functionality of the methods use
  // const addTodo = (todo) => {
  //   // we have to keep the data of previous todo as well as add new todo to the array
  //   setTodos((prev) = [{id: Date.now(), ...todo}, ...prev]); // we have used spread operator to keep the previous data along with the new todo
  //   // we need to have a dynamic value for id everytime, hence we have used Date.now() 
  // }

  // const updateTodo = (id, todo) => {

  //   // we have to add new todo to the id which matches the id of the newly created array in the "prev" array and this new todo is actually created in the addTodo mathod as wriiten above

  //   setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  // }

  // const deleteTodo = (id) => {
  //   setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id))); 
  //   // this will make sure to add all the values of the "prev" array that are not equal to the given id value
  // }

  // const toogleComplete = (id) => {
  //   setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  // }