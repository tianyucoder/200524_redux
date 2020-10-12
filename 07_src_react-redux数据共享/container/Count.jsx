/* 
		该文件是Count的容器组件，用于：
			给Count的UI组件传递：(1).状态 (2).操作状态的方法
*/
//引入connect
import {connect} from 'react-redux'
import {incrementAction,decrementAction,incrementAsyncAction} from '../redux/actions/count'
import React, { Component } from 'react'
//定义一个求和组件
class Count extends Component {

	increment = ()=>{
		const {value} = this.checkedNumber//获取选择的数字
		this.props.jia(value*1)
	}

	decrement = ()=>{
		const {value} = this.checkedNumber//获取选择的数字
		this.props.jian(value*1)
	}

	incrementOdd = ()=>{
		const {count} = this.props //获取原状态
		if(count % 2 === 0) return
		const {value} = this.checkedNumber//获取选择的数字
		this.props.jia(value*1)
	}

	incrementAsync = ()=>{
		const {value} = this.checkedNumber//获取选择的数字
		// store.dispatch(incrementAsyncAction(value*1,500))
		this.props.jiaAsync(value*1,500)
	}

	render() {
		// console.log(this.props);
		return (
			<div>
				<h1>我是Count组件，下方组件人数为{this.props.renShu}</h1>
				<h3>当前求和为：{this.props.count.he}</h3>
				<select ref={c => this.checkedNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementOdd}>和为奇数加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>
			</div>
		)
	}
}

//使用connect()()方式创建一个Count的容器组件
export default connect(
	//用于给UI传递状态,state是redux中的总状态(对象)
	state => ({
		count:state,
		renShu:state.yiduiren.length
	}),
	//用于给UI传递操作状态的方法
	{
		jia: incrementAction,
		jian:decrementAction,
		jiaAsync:incrementAsyncAction
	}
	//#region 传统写法
	/* dispatch => ({
		jia: value => dispatch(incrementAction(value*1)),
		jian: value => dispatch(decrementAction(value*1)),
		jiaAsync:(value,time)=> dispatch(incrementAsyncAction(value*1,time)),
	}) */
	//#endregion
	)(Count)