import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'; 
import { Router, Route, Redirect } from 'react-router'; 
import { syncHistoryWithStore, routerActions } from 'react-router-redux'; 
import { createBrowserHistory } from 'history';
import { persistStore } from 'redux-persist'; 
import 'font-awesome/css/font-awesome.css'; 
import configureStore from './store'; 
import {Home} from './components'; 
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();  

persistStore(store, {blacklist: ['routing']}, () => {
		
		
	const history = syncHistoryWithStore(createBrowserHistory(), store); 

	ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/" component={Home} />
			</div>
		</Router>
	</Provider>, 
	document.getElementById('root'));
}); 

registerServiceWorker();
