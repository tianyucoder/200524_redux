//该文件是定义：为Count组件服务的reducer————本质是函数

const iniState = 0 //初始化状态
export default function (preState=iniState,action){
	// console.log('@',preState);
	//从action对象中获取type,data
	const {type,data} = action
	//根据type决定如何加工状态
	switch (type) {
		case 'increment':
			console.log(preState,data);
			return preState + data
		case 'decrement':
			return preState - data
		default:
			return preState 
	}
}