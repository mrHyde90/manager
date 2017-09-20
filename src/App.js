import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm'
import Router from './Router';

class App extends Component{
	componentWillMount(){
		// Initialize Firebase
		//fill the fields
  		var config = {
    		apiKey: "",
    		authDomain: "",
    		databaseURL: "",
   		 	projectId: "",
    		storageBucket: "",
    		messagingSenderId: ""
  		};
  		firebase.initializeApp(config);
	}

	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
				<Provider store={store}>
				
						<Router />
				</Provider>
			);
	}
}

///
export default App;