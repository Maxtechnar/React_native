import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from "./Menu.style"
import colors from '../../res/colors';
import Icon from 'react-native-vector-icons/FontAwesome';



const Menu = ({ navigation }) => {
    return (
        <View >
            <TouchableHighlight
                style={styles.body}
                underlayColor={colors.gray}
                onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.button}>
                    Profile
                </Text>
            </TouchableHighlight>
            <Icon style={styles.arrow} name="chevron-right" />
        </View>
    )
}

export default Menu;
