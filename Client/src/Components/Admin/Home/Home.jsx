import React from 'react'
import "./Home.scss"

export const Home = () => {
	return (
		<div className='homeCont'>
			<h1>This is an iframe that references the notes google doc</h1>
			<iframe src="https://docs.google.com/document/d/e/2PACX-1vT_5Go6bRhYIayv46Jj50wMW7Wj7Z3FSsla2VTuJVPN95KkOwBVnE02PHkkXv8NvXCnv_u9-rE90oJF/pub?embedded=true" width="9999" height="3000" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
			<h1>This is the file structure of the website</h1>
			<iframe src="https://docs.google.com/document/d/e/2PACX-1vTAfCmRSuI9svqC5eQLBWXSUSFU4jGnjdLTnko6HGPbhnCTQmTYVZ721GX-aIZBGTmRDiGfOKu3IObF/pub?embedded=true" width="9999" height="1000" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
		</div>
	)
}
