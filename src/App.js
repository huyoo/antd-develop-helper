import React, {Component} from 'react';
import './App.css';
import Routers from "./config/router.config";

export default class App extends Component {
	componentDidMount() {
		document.getElementById('loading').style.display = 'none';
	}

	render() {
		return <Routers/>
	}
}
