import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import "./App.scss";

import { SyncTablet } from "./Components/SyncTablet/SyncTablet";

import { Admin } from './Components/Admin/Admin';
import { Dashboards } from "./Components/Admin/Dashboards/Dashboards";
import { QrGenerator } from "./Components/Admin/QrGenerator/QrGenerator";
import { Home } from "./Components/Admin/Home/Home";

import { Quality } from "./Components/Quality/Quality";

import { Packaging } from "./Components/Packaging/Packaging";

import { Material } from "./Components/Material/Material";

import { Inspection } from "./Components/Inspection/Inspection";
import { QrScanner } from "./Components/Inspection/QrScanner/QrScanner";

export const App = () => {
	return (
		<div className='cont'>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={SyncTablet} />

					<Route path ="/Admin" component = {Admin} />
					<Route path="/Dashboards" component={Dashboards} />
					<Route path ="/QrGenerator" component={QrGenerator} />
					<Route path ="/Home" component={Home} />
					<Route path ="/Quality" component={Quality} />
					<Route path ="/Packaging" component = {Packaging} />
					<Route path ="/Material" component = {Material} />
					<Route path ="/Inspection" component = {Inspection} />
					<Route path = "/QrScanner" component = {QrScanner} />

				</Switch>
			</BrowserRouter>
		</div>
	)
};