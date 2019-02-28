import {createStore} from 'redux'

function todos(state =[] action){
  switch (action.type){
    case 'ADD_TOO':
      return state.concat([action.text])
    default:
      return state
   }
} 

const store = createStore(todos, ['Use Redux'})
    
store.dispatch({
  type: 'ADD_TOO',
  text: 'Read the docs'
})
         
console.log(store.getState())
