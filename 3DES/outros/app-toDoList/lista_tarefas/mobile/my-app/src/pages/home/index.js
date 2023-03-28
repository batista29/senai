import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import aberto from "./aberto/index"
import cancelada from "./cancelada/index"
import finalizada from "./finalizada/index"
import nova from "./nova_lista/index"

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="aberto" component={aberto} />
      <Tab.Screen name="finalizada" component={finalizada} />
      <Tab.Screen name="cancelada" component={cancelada} />
      <Tab.Screen name="nova" component={nova} />
    </Tab.Navigator>
  );
}