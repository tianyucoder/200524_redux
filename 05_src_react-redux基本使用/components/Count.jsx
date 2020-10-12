import React, { Component } from 'react'

export default class Count extends Component {

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
		this.props.jia(value*1,500)
	}

	render() {
		// console.log(this.props);
		return (
			<div>
				<h1>当前求和为：{this.props.count}</h1>
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
