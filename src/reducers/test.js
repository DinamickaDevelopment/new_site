const test = (state = {}, action) => {
	console.log(action)
	switch(action.type) {
		case 'TEST':
		return {greeting: action.payload}
	} 
	
	return state
} 

export {test}