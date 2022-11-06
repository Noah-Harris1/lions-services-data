import React from 'react'
import "./QrGenerator.scss"
import { Navbar } from '../Common/Navbar/Navbar'

export const QrGenerator = () => {
	return (
		<div className='qrGeneratorCont'>
			<div className='qrGeneratorBody'>
				<Navbar />
			</div>
		</div>
	)
}