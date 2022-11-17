import React from 'react';
import './QrScanner.scss';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader'; 

export const QrScanner = (props) => {
  
  var [data, setData] = useState('No result');
  var audio = new Audio('../src/Assets/beep.mp3');

  return (
    <div>
      <div className = 'qrScannerCont'>
        <p>{data}</p>
      <QrReader onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
                    audio.play();
                }
        
                if (!!error) {
                    console.info(error);
                }
            }}
            videoStyle = {{height: '30%'}}
            constraints = {{ facingMode: 'environment'}}
            />
      </div>
    </div>
  );
};