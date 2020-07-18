import * as React from 'react';
import { View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LOGIN from './pages/login'
import drawer from './pages/drawer'
import details from './pages/details'

const Stack = createStackNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ header: () => { false } }} initialRouteName="LOGIN" name="LOGIN" component={LOGIN} />
                <Stack.Screen  options={{ header: () => { false } }} name="Drawer" component={drawer} />
                <Stack.Screen options={{ header: () => { false } }} initialRouteName="details" name="details" component={details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}