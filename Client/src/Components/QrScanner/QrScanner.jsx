import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Navbar } from '../Common/Navbar/Navbar'

export const QrScanner = (props) => {
  const [data, setData] = useState('No result');

  var audio = new Audio('../src/Assets/beep.mp3');

  return (
    <div className = 'qrScannerCont'>
	    <Navbar />
      <QrReader
        onResult={(result, error) => {
          
          if (!!result) {
            setData(result?.text);
            audio.play();
          }

          if (!!error) {
            console.info(error);
          }
        }}/>
      <p>{data}</p>
    </div>
  );
};