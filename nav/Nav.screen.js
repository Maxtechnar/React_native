import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutMe, Menu } from '../screen';
import colors from '../res/colors';
import { MENU, PROFILE } from '../config/constants';

const Stack = createNativeStackNavigator();
const Nav = () => {
    return (
        <NavigationContainer onStateChange={() => {

        }}>
            <Stack.Navigator initialRouteName={MENU}>
                <Stack.Screen options={{
                    headerStyle: {
                        backgroundColor: colors.white,
                    },
                    headerTintColor: colors.black,
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
