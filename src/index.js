import React from 'react';
import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import SplashScreen from 'react-native-splash-screen';
import App from './app';

const queryClient = new QueryClient();

const PhotoSharingApp = () =>{
    React.useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </SafeAreaView>
    )
}

export default PhotoSharingApp;