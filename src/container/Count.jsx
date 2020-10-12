/* 
		该文件是Count的容器组件，用于：
			给Count的UI组件传递：(1).状态 (2).操作状态的方法
*/
//引入xxxxx
import {connect} from 'react-redux'

//引入Count的UI组件
import CountUI from '../components/Count'

//a函数用于给UI传递状态
function a(){
	return {count:108}
}
//b函数用于给UI传递操作状态的方法
function b(){
	return {jia:(vaule)=>{alert(`我会通知redux加${vaule}`)}}
}

//使用connect()()方式创建一个Count的容器组件
const CountContainer = connect(a,b)(CountUI)

export default CountContainer