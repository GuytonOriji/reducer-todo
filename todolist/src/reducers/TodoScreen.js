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

  



             return (
    <div className="App">
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
