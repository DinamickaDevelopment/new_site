export const TEST = 'TEST'; 
export const test = () => ({
		type: TEST, 
		payload: 'HELLO WORLD!'
}); 
export const testAction = () => {
	return (dispatch, getState) => {
		dispatch(test()); 
	}
} 
