
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Read from "./vendedor/indexRead.js"
import Create from "./vendedor/cadastro.js"

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Read" component={Read} />
            <Tab.Screen name="Create" component={Create} />
        </Tab.Navigator>
    );
}