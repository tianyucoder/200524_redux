//引入createStore，用于创建最为核心的store对象
import {createStore} from 'redux'
//引入为Count服务的reducer
import countReducer from './count_reducer'
//创建一个store对象，同时指定好为store服务的reducer（老板在创业之初就找好了后厨团队）
const store = createStore(countReducer)

export default store