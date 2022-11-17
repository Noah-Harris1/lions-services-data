import React from 'react'
import QRCode from "react-qr-code";
import "./QrGenerator.scss"
import { useState } from 'react';

export const QrGenerator = () => {
	const [message, setMessage] = useState("{'Bundle ID': 123456789, 'DateTime': '1900-01-11 : 6:30:04.444', 'Size': 5} ");

	const handleChange = event => {
		setMessage(event.target.value);
	}

	return (
		<div className='qrGeneratorCont'>
			<h1>{message}</h1>
			<QRCode value = {message}/>
			<br/>
			<input type="text" placeholder='Enter Text' id="message" onChange={handleChange} value={message}/>
		</div>
	)
}


