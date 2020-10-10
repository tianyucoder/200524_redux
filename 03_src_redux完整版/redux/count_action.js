import {INCREMENT,DECREMENT} from './constant'

export const incrementAction = number => ({type:INCREMENT,data:number})
export const decrementAction = number => ({type:DECREMENT,data:number})
	 