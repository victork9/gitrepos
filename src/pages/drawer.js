import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Repos from './Repos'
import Favoritos from './Favoritos'
import { useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Drawer = createDrawerNavigator();

export default function App() {
    const routes = useRoute()

    return (

        <Drawer.Navigator initialRouteName="Repositorios">
            <Drawer.Screen name="Repositórios" options={{
                drawerIcon: ({ focused }) =>
                    (<MaterialCommunityIcons name="archive" size={30} color={focused ? "blue" : "grey"} />)
            }}
                initialParams={routes.params} component={Repos} />
            <Drawer.Screen name="Favoritos" options={{
                drawerIcon: ({ focused }) =>
                    (<MaterialIcons name="stars" size={30} color={focused ? "blue" : "grey"} />)
            }}
                initialParams={routes.params} component={Favoritos} />
        </Drawer.Navigator>

    );
}