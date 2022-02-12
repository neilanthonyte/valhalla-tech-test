import React from 'react';
import {View, Text} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const PhotoSharingApp = () =>{
    React.useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000)
    }, [])

    return (
        <View>
            <Text>hi</Text>
        </View>
    )
}

export default PhotoSharingApp;