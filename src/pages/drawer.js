import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Repos from './Repos'
import Favoritos from './Favoritos'


const Drawer = createDrawerNavigator();

export default function App() {
    return (

        <Drawer.Navigator initialRouteName="Repositorios">
            <Drawer.Screen name="Repositorios" component={Repos} />
            <Drawer.Screen name="Favoritos" component={Favoritos} />
        </Drawer.Navigator>

    );
}