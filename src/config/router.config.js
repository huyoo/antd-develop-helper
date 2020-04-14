/**
 * create by hy ON 2020/4/14
 */
import React, {Component, Suspense, lazy} from "react";
import {Route, HashRouter} from 'react-router-dom';
import Loading from "../components/Loading";

const ColumnBuilder = lazy(() => import('../pages/ColumnBuilder'));
const FormBuilder = lazy(() => import('../pages/FormBuilder'));

export default class Routers extends Component {
	render() {
		return <HashRouter>
			<Suspense fallback={<Loading/>}>
				<Route path='/column-builder' exact component={ColumnBuilder}/>
				<Route path='/form-builder' exact component={FormBuilder}/>
				<Route path='/' exact component={ColumnBuilder}/>
			</Suspense>
		</HashRouter>
	}
}
