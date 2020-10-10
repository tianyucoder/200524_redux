import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

//监测redux中状态的修改
store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})