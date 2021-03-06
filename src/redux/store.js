//引入createStore，用于创建最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
//引入composeWithDevTools，用于支持开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
//引入redux-thunk，用于支持异步action(函数式的action)
import thunk from 'redux-thunk'
//引入汇总之后的reducer
import reducer from './reducers'


//创建一个store对象，同时指定好为store服务的reducer（老板在创业之初就找好了后厨团队）
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store