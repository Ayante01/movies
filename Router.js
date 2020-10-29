import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from "@react-navigation/stack"

import {HomeScreen, DetailsScreen} from './src/screens';
import constants from './src/utils/constants';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={constants.SCREEN.HOME} 
            screenOptions={{
                headerStyle: {
                    backgroundColor: constants.COLORS.LIGHT_GRAY,
                },
            }}>
                <Stack.Screen 
                    name={constants.SCREEN.HOME} 
                    component={HomeScreen} 
                    options={{title: 'MOVIES'}}>
                </Stack.Screen>
                <Stack.Screen 
                    name={constants.SCREEN.DETAILS} 
                    component={DetailsScreen} 
                    options={{ 
                        title : '',
                        headerBackTitleVisible: false,
                        headerTransparent: true,
                    }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
    };
 export default Router;