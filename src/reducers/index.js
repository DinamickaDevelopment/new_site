import { combineReducers} from 'redux'; 
import { test } from './test'; 
import { routerReducer as routing } from 'react-router-redux';  

export default combineReducers({
	routing, 
	test
})