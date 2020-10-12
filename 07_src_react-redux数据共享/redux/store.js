//引入createStore，用于创建最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为Count服务的reducer
import countReducer from './reducers/count'
//引入为Person服务的reducer
import personReducer from './reducers/person'

//引入redux-thunk，用于支持异步action(函数式的action)
import thunk from 'redux-thunk'

//组合多个reducer为一个
const allReducer = combineReducers({ //combineReducers调用时传入的对象就是redux中的【总状态】！！
	he:countReducer,
	yiduiren:personReducer
})

//创建一个store对象，同时指定好为store服务的reducer（老板在创业之初就找好了后厨团队）
const store = createStore(allReducer,applyMiddleware(thunk))

export default store