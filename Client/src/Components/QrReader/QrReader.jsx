import React from 'react'
import "./QrReader.scss"
import { Navbar } from '../Common/Navbar/Navbar'

export const QrReader = () => {
	return (
		<div className='qrReaderCont'>
			<div className='qrReaderBody'>
				<Navbar />
			</div>
		</div>
	)
}