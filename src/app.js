import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Pages from './pages';

const Tab = createMaterialTopTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Nature" component={Pages.Nature} />
                <Tab.Screen name="Architecture" component={Pages.Architecture} />
                <Tab.Screen name="Fashion" component={Pages.Fashion} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;