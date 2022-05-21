import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';




const Button = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableHighlight
            underlayColor={props.color}
            onPress={() => navigation.navigate(props.name)}>
            <View style={props.style.container}>
                <Text style={props.style.button}>
                    {props.name}
                </Text>
                <View style={props.style.icon}>
                    <Icon style={props.style.arrow} name="chevron-right" />
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default Button;
