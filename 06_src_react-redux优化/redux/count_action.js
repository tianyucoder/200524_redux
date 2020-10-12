import {INCREMENT,DECREMENT} from './constant'

export const incrementAction = number => ({type:INCREMENT,data:number})
export const decrementAction = number => ({type:DECREMENT,data:number})

//异步action中往往都会在异步任务有结果后，调用同步action
export const incrementAsyncAction = (number,time) => {
	return (dispatch)=>{
		//开启异步任务
		setTimeout(()=>{
			//通知redux加number
			dispatch(incrementAction(number))
		},time)
	}
}
	 