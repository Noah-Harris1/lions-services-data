import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Navbar } from '../Common/Navbar/Navbar'
import './QrScanner.scss'

export const QrScanner = (props) => {
  const [data, setData] = useState('No result');

  var audio = new Audio('../src/Assets/beep.mp3');

  return (
    <div>
      <Navbar />
      <div className = 'qrScannerCont'>
        
        <h1>{data}</h1>
        <QrReader
          onResult={(result, error) => {
            
            if (!!result) {
              setData(result?.text);
              audio.play();
            }

            if (!!error) {
              console.info(error);
            }
          }}
          videoStyle={{
            height: '30%',
            border: '3px solid green'}}
          />
      </div>
    </div>
  );
};