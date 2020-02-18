import React, {useState,useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { todoReducer, initialState } from './reducers/TodoReducer';
import TodoScreen from './reducers/TodoScreen'
import 'bootstrap/dist/css/bootstrap.min.css';




function App (){
    

const [state,dispatch] = useReducer(todoReducer,initialState)

    const [todo,setTodo] = useState('')


     // useEffect(()=>{
     //      setTodoList(
     //        todoList = ['get milk','code','render components']
     //        )
     // },[todoList])

  



             return (
    <div className="container">
    <TodoScreen 
    list={state}
    dispatch={dispatch}
    />
     <div className="card">
     <input type='text' name="todo" onChange={(e)=>{
      setTodo(e.target.value)
     }}
     className='form-control'
     />
     <button onClick={()=>{
        dispatch({
          type:'ADD_TODO', payload:todo,
        })
     }}

     className="btn btn-info"

     >post</button>

      <button onClick={()=>{
        dispatch({
          type:'CLEAR'
        })
     }}

     className="btn btn-danger"

     >Clear</button>
     </div>
    </div>
  );
        
}

export default App;
