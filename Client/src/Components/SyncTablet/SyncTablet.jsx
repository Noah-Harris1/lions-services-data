import React, { useState } from 'react';
import './SyncTablet.scss';
import { QrReader } from 'react-qr-reader';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../Common/Navbar/Navbar'

export const SyncTablet = () => {

    var [data, setData] = useState('No result');
    var audio = new Audio('../src/Assets/beep.mp3');
    var history = useHistory();

    return(
        <div className = 'pageBody'>
            <Navbar />
            <QrReader onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
                    audio.play();
                    history.push("/"+result?.text);
                }
        
                if (!!error) {
                    console.info(error);
                }
            }}
            videoStyle={{height: '30%'}}
            constraints = {{ facingMode: 'environment'}}
            />
        </div>
    );
}