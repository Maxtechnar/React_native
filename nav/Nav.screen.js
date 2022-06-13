import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutMe, Menu } from '../screen';
import colors from '../res/colors';
import { MENU, PROFILE } from '../config/constants';

const Stack = createNativeStackNavigator();
const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={MENU}>
                <Stack.Screen options={{
                    headerStyle: {
                        backgroundColor: colors.purple,
                    },
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} name={MENU} component={Menu} />
                <Stack.Screen options={{
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: colors.purple,
                    },
                }} name={PROFILE} component={AboutMe} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Nav;
