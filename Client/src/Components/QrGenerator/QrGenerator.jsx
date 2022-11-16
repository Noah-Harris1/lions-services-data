import React from 'react'
import QRCode from "react-qr-code";
import "./QrGenerator.scss"
import { Navbar } from '../Common/Navbar/Navbar'
import { useState } from 'react';

export const QrGenerator = () => {
	const [message, setMessage] = useState('');

	const handleChange = event => {
		setMessage(event.target.value);
		console.log('value is:', event.target.value);
	}

	return (
		<div>
			<Navbar />
			<div className='qrGeneratorCont'>
				<QRCode value = {message}/>
				<br/>
				<input type="text" placeholder='Enter Text' id="message" onChange={handleChange} value={message}/>
			</div>
		</div>
		
	)
}


