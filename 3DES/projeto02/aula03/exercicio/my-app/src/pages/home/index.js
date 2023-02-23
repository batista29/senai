
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Main from "./vendedor/indexRead.js"
import Create from "./vendedor/cadastro.js"

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Create" component={Create} />
        </Tab.Navigator>
    );
}