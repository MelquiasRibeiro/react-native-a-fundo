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
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#fff',

                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="User"
                    component={User}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
