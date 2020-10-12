import {INCREMENT,DECREMENT} from '../constant'

export const increment = number => ({type:INCREMENT,data:number})
export const decrement = number => ({type:DECREMENT,data:number})

//异步action中往往都会在异步任务有结果后，调用同步action
export const incrementAsync = (number,time) => {
	return (dispatch)=>{
		//开启异步任务
		setTimeout(()=>{
			//通知redux加number
			dispatch(increment(number))
		},time)
	}
}
	 