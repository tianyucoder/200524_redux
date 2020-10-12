import {ADDPERSON} from '../constant'

const initState = [
	{id:'01',name:'老刘',age:5}
]
export default function(preState=initState,action){
	const {type,data} = action
	switch (type) {
		case ADDPERSON:
			return [data,...preState]
		default:
			return preState
	}
}