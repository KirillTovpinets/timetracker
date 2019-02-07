import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authorization from './Authorization';
import Registration from './Registration';
import '../styles/App.css';
export default class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Route exact path='/' component={Authorization}/>
					<Router path='/registration' component={Registration}/>
				</Fragment>
			</Router>
		)
	}
}