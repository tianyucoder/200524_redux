//该文件是定义：为Count组件服务的reducer————本质是函数

const iniState = 0 //初始化状态
export default function (preState=iniState,action){
	// console.log('@',preState);
	//从action对象中获取type,data
	const {type,data} = action
	//根据type决定如何加工状态
	switch (type) {
		case 'increment': //如果是加
			return preState + data
		case 'decrement'://如果是减
			return preState - data
		default: //如果是初始化
			return preState 
	}
}