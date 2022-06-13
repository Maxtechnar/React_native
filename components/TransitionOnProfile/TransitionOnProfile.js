import React from "react";
import styles from './TransitionOnProfile.styles'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from "../Button/Button";

const TransitionOnProfile = ({ onPress, name }) => {
    return (
        <Button onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.button}>
                    {name}
                </Text>
                <View style={styles.icon}>
                    <Icon style={styles.arrow} name="chevron-right" />
                </View>
            </View>
        </Button>
    )
}

export default TransitionOnProfile;
