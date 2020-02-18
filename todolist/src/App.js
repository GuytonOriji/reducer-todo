import React, {useState,useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { todoReducer, initialState } from './reducers/TodoReducer';
import TodoScreen from './reducers/TodoScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap'



function App (){
    

const [state,dispatch] = useReducer(todoReducer,initialState)

    const [todo,setTodo] = useState('')

    const btn ={
      fontSize:"1.6rem"
    }

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
     <input type='text' name="todo" 
     onChange={(e)=>{setTodo(e.target.value)}}
     onKeyDown={(e)=>{if(e.which===13){dispatch({
          type:'ADD_TODO',payload:e.target.value
        }); document.querySelector(".card input").value=''
   }}}
     className='form-control'
     placeholder="enter task here..."
     />
     <Button style={btn} onClick={()=>{
        dispatch({
          type:'ADD_TODO', payload:todo,
        });

        document.querySelector(".card input").value=''
     }}

     className="btn btn-info"

     >post</Button>

      <Button style={btn} onClick={()=>{
        dispatch({
          type:'CLEAR'
        })
     }}

     className="btn btn-danger"

     >Clear</Button>
     </div>
    </div>
  );
        
}

export default App;
