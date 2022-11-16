import React from 'react'
import "./Dashboards.scss"
import { Navbar } from '../Common/Navbar/Navbar'
import {XYPlot, LineSeries, VerticalBarSeries, MarkSeries} from 'react-vis';

export const Dashboards = () => {
	const data = [
		{x: 0, y: 8},
		{x: 1, y: 5},
		{x: 2, y: 4},
		{x: 3, y: 9},
		{x: 4, y: 1},
		{x: 5, y: 7},
		{x: 6, y: 6},
		{x: 7, y: 3},
		{x: 8, y: 2},
		{x: 9, y: 0}
	  ];
	return (
		<div>
			<Navbar />
			<div className='dashboardsCont'>
				<XYPlot height={200} width={200}>
				<VerticalBarSeries data={data} />
				</XYPlot>
			</div>
		</div>
	)
}