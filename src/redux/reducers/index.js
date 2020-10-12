//汇总所有的reducer，并暴露
import {combineReducers} from 'redux'
//引入countReducer
import count from './count'
//引入personReducer
import person from './person'

export default combineReducers({
	he:count,
	yiduiren:person
})

