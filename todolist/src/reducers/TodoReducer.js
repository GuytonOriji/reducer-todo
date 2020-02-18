  
export const initialState = [
{
    item:"take out trash",
 completed:false,
 id:Math.floor(Math.random()*1000),
  
  
 
}];




export const todoReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {

    case "ADD_TODO":
      return [ ...state,{
       
        item:action.payload,
        completed:false,
        id:Math.floor(Math.random()*1000)
      }]
       case "COMPLETED_TODO":
      return [...state,{...action.payload,
              
              item:'completed',
              completed:true,
              id:Math.floor(Math.random()*1000)
      
            }]

             case "CLEAR":
      return state.filter(flush=>{
       return flush.completed===false
      })
    default:
      return state;
  }
  // if (action.type === 'TOGGLE_EDITING') {
  //   return {
  //     ...state,
  //     editing: !state.editing
  //   };
  // } else if (action.type === 'UPDATE_TITLE') {
  //   return {
  //     ...state,
  //     title: action.payload,
  //     editing: false
  //   };
  // } else {
  //   return state;
  // }
};