import {connect} from 'react-redux'
import React, { Component } from 'react'
import {addPerson} from '../redux/actions/person'

class Person extends Component {

	add = ()=>{
		const {nameNode:{value:name},ageNode:{value:age}} = this
		this.props.addPerson({id:Date.now(),name,age})
		this.nameNode.value = ''
		this.ageNode.value = ''
	}

	render() {
		return (
			<div>
				<h1>我是Person组件,上方组件求和为{this.props.count}</h1>
				<input ref={c => this.nameNode = c} type="text" placeholder="输入姓名"/>
				<input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
				<button onClick={this.add}>添加</button>
				<ul>
					{
						this.props.persons.map((p)=>{
							return <li key={p.id}>{p.name}-{p.age}岁</li>
						})
					}
				</ul>
			</div>
		)
	}
}

export default connect(
	//映射状态
	state => ({
		persons:state.persons,
		count:state.count
	}),
	//映射操作状态的方法
	{
		addPerson
	}
)(Person)
