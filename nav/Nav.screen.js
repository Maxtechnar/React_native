import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../screen/Menu/Menu.screen';
import AboutMe from '../screen/AboutMe/AboutMe.screen';
import colors from '../res/colors';


const Stack = createNativeStackNavigator();

const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerStyle: {
                        backgroundColor: colors.purple,
                    },
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} name="Menu" component={Menu} />
                <Stack.Screen options={{
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: colors.purple,
                    },
                }} name="Profile" component={AboutMe} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Nav;
