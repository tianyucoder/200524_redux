import {ADDPERSON} from '../constant'

const initState = [
	{id:'01',name:'老刘',age:5}
]
export default function(preState=initState,action){
	const {type,data} = action
	switch (type) {
		case ADDPERSON:
			// preState.unshift(data)
			// console.log(preState);
			return [data,...preState]
		default:
			return preState
	}
}

/* 
	纯函数
		必须遵守以下一些约束  
				a.	不得改写参数数据
				b.	不会产生任何副作用，例如网络请求，输入和输出设备
				c.	不能调用Date.now()或者Math.random()等不纯的方法 
*/