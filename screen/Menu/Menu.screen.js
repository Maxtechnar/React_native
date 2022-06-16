import React from 'react';
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TransitionOnProfile } from '../../components';
import colors from '../../res/colors';

const Menu = ({ navigation }) => {
    return (
        <ScrollView>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
            <TransitionOnProfile onPress={() => navigation.navigate("Profile")} name={"Profile"} />
        </ScrollView>
    )
}

export default Menu;
