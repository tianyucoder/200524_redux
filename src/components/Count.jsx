import React, { Component } from 'react'

export default class Count extends Component {

	state = {
		count:0 //初始化状态
	}

	increment = ()=>{
		const {count} = this.state //获取原状态
		const {value} = this.checkedNumber//获取选择的数字
		this.setState({count:count+value*1})
	}

	decrement = ()=>{
		const {count} = this.state //获取原状态
		const {value} = this.checkedNumber//获取选择的数字
		this.setState({count:count-value*1})
	}

	incrementOdd = ()=>{
		const {count} = this.state //获取原状态
		if(count % 2 === 0) return
		const {value} = this.checkedNumber//获取选择的数字
		this.setState({count:count+value*1})
	}

	incrementAsync = ()=>{
		const {count} = this.state //获取原状态
		const {value} = this.checkedNumber//获取选择的数字
		setTimeout(()=>{
			this.setState({count:count+value*1})
		},500)
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
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
