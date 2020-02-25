import React, {Component} from 'react';
import './App.css';
import ColumnBuilder from "./pages/ColumnBuilder";

export default class App extends Component {
	componentDidMount() {
		document.getElementById('loading').style.display = 'none';
	}

	render() {
		return <ColumnBuilder/>
	}
}
