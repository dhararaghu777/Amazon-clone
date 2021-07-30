import * as actionTypes from './actions';

export const addToBasket=(id,title,price,rating,image)=>{
  return {
    type:actionTypes.ADD_TO_BASKET,
    item:{
      id:id,
      title:title,
      image:image,
      rating:rating,
      price:price
    }
  }
}

export const removeFrombasket=(index)=>{
    return{
      type:actionTypes.REMOVE_FROM_BASKET,
      index:index
    }
}

export const setUser=(authUser)=>{
  return{
    type:actionTypes.SET_USER,
    user:authUser
  }
}

export const removeUser=()=>{
  return {
    type:actionTypes.REMOVE_USER,
  }
}

export const clearBasket=()=>{
  return {
    type:actionTypes.CLEAR_BASKET,
  }
}