import React from 'react';
import {View} from 'react-native';
import Navs from './navs';
import DownloadProgress from './lib/DownloadProgress';

// components that need to render once are added here
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Navs />
            <DownloadProgress />
        </View>
    )
}

export default App;