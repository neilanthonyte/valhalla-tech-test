import React from 'react';
import {View, Text} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import App from './app';

const PhotoSharingApp = () =>{
    React.useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000)
    }, [])

    return (
        <App />
    )
}

export default PhotoSharingApp;