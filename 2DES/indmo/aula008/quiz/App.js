import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import quiz1 from './src/pages/quiz1.js';
import quiz2 from './src/pages/quiz2.js';
import quiz3 from './src/pages/quiz3.js';
import quiz4 from './src/pages/quiz4.js';
import quiz5 from './src/pages/quiz5.js';
import pontos from './src/home/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="quiz1" component={quiz1} />
        <Stack.Screen name="quiz2" component={quiz2} />
        <Stack.Screen name="quiz3" component={quiz3} />
        <Stack.Screen name="quiz4" component={quiz4} />
        <Stack.Screen name="quiz5" component={quiz5} />
        <Stack.Screen name="pontos" component={pontos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}