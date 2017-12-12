import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducer'
import reduxPromise from './reduxPromise'


ReactDOM.render(<App />,
	document.getElementById('root'
		));

