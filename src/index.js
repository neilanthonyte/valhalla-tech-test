import React from 'react';
import {SafeAreaView} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import App from './app';

const PhotoSharingApp = () =>{
    React.useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000)
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <App />
        </SafeAreaView>
    )
}

export default PhotoSharingApp;