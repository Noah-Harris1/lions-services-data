import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Dashboards } from "./Components/Dashboards/Dashboards";
import { QrScanner } from "./Components/QrScanner/QrScanner";
import { QrGenerator } from "./Components/QrGenerator/QrGenerator";
import { Quality } from "./Components/Quality/Quality";
import React from 'react';
import "./App.scss";

export const App = () => {
	return (
		<div className='cont'>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Dashboards" component={Dashboards} />
					<Route path="/QrScanner" component={QrScanner} />
					<Route path ="/QrGenerator" component={QrGenerator} />
					<Route path ="/Quality" component={Quality} />
				</Switch>
			</BrowserRouter>
		</div>
	)
};