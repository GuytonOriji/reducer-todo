import React, {useState,useReducer, useEffect } from 'react';
import { Alert } from 'reactstrap';
import { todoReducer, initialState } from './TodoReducer';




function TodoScreen (props){
            


// const [state,dispatch] = useReducer(todoReducer,initialState)


     // useEffect(()=>{
     //      setTodoList(
     //        todoList = ['get milk','code','render components']
     //        )
     // },[todoList])

  
const instructions = {
        display:"flex",
        flexDirection:"column"
}


             return (
    <div className="App">
    <h1>Todo List</h1><br />
    <ol style={instructions}>
    <li>Post some tasks</li>
    <li>Click on task you've completed</li>
    <li>Clear all completed task</li>
    <li>Repeat :)</li>
    </ol>
     <div className="screen">
        {           
                props.list && props.list.map(task=>{
                        console.log(!task.completed)
                           return !task.completed?
                            (
                                <Alert key={task.id} className="info"  onClick={(e)=>{
                                e.target.remove()
        props.dispatch({
          type:'COMPLETED_TODO',payload:this
        })
     }}>
     {task.item}
     </Alert>
                                )
                            :
                            (
                                <Alert key={task.id} className="info"  onClick={(e)=>{
                                e.target.remove()
                               
        props.dispatch({
          type:'COMPLETED_TODO',payload:"completed"
        })
     }}>
                            COMPLETED!
     </Alert>
                                );
                })

               }
     </div>
    </div>
  );
        
}

export default TodoScreen;
