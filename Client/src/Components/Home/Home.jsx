import React from 'react'
import "./Home.scss"
import { Navbar } from '../Common/Navbar/Navbar'

export const Home = () => {

	return (
		<div className='homeCont'>
			<div className='homeBody'>
				<Navbar />
			</div>
		</div>
	)
}
