/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import User from './pages/user';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="User" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
