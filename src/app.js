import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Pages from './pages';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Nature" component={Pages.Nature} />
                <Stack.Screen name="Architecture" component={Pages.Architecture} />
                <Stack.Screen name="Fashion" component={Pages.Fashion} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;