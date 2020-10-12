/* 
		该文件是Count的容器组件，用于：
			给Count的UI组件传递：(1).状态 (2).操作状态的方法
*/
//引入connect
import {connect} from 'react-redux'
import {incrementAction,decrementAction,incrementAsyncAction} from '../redux/count_action'

//引入Count的UI组件
import CountUI from '../components/Count'

//mapStateToProps函数用于给UI传递状态
function mapStateToProps(state){
	return {count:state}
}
//mapDispatchToProps函数用于给UI传递操作状态的方法
function mapDispatchToProps(dispatch){
	return {
		jia:(value)=>{dispatch(incrementAction(value*1))},
		jian:(value)=>{dispatch(decrementAction(value*1))},
		jiaAsync:(value,time)=>{dispatch(incrementAsyncAction(value*1,time))},
	}
}

//使用connect()()方式创建一个Count的容器组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

export default CountContainer