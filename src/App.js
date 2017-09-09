import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component{
	componentWillMount(){
		// Initialize Firebase
  		var config = {
    		apiKey: "AIzaSyBkqohFSXvY8v0PfdhKZYwN4erwR7HYn_Y",
    		authDomain: "manager-beaa9.firebaseapp.com",
    		databaseURL: "https://manager-beaa9.firebaseio.com",
   		 	projectId: "manager-beaa9",
    		storageBucket: "manager-beaa9.appspot.com",
    		messagingSenderId: "529862063148"
  		};
  		firebase.initializeApp(config);
	}

	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
				<Provider store={store}>
						<LoginForm />
				</Provider>
			);
	}
}

///
export default App;