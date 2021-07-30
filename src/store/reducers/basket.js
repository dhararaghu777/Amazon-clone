import * as actionTypes from '../actions/actions';

const initialState={
  basket:[],
  user:null
}


const addToBasket=(state,action)=>{
  const basket=[...state.basket];
  basket.push(action.item);
  // console.log("basket",basket);
  return {
    ...state,
    basket:[...basket]
  }
}

const removeFromBasket=(state,action)=>{
  const basket=[...state.basket];
  basket.splice(action.index,1);
  // console.log(basket);

  return{
    ...state,
    basket:[...basket]
  }
}


const setUser=(state,action)=>{
  return{
    ...state,
    user:{...action.user}
  }
}

const removeUser=(state,action)=>{
  return{
    ...state,
    user:null
  }
}

const clearEntireBasket=(state,action)=>{
  return {
    ...state,
    basket:[]
  }
}

// <<<<<<<<< Reducer >>>>>>>>>>>
const reducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case actionTypes.ADD_TO_BASKET:
      return addToBasket(state,action);
    case actionTypes.REMOVE_FROM_BASKET:
      return removeFromBasket(state,action);
    case actionTypes.SET_USER:
      return setUser(state,action);
    case actionTypes.REMOVE_USER:
      return removeUser(state,action);

    case actionTypes.CLEAR_BASKET:
      return clearEntireBasket(state,action);

    default:
      return {...state};
  }
}

export default reducer;