import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { TransitionOnProfile } from '../../components';

const Menu = ({ navigation }) => {
    return (
        <ScrollView>
            <TransitionOnProfile onPress={() => navigation.navigate("Profile")} name={"Profile"} />
        </ScrollView>
    )
}

export default Menu;
