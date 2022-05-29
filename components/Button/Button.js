import React from 'react';
import { TouchableHighlight } from 'react-native';
import colors from '../../res/colors';

const Button = ({ onPress, children, underlayColor = colors.purple }) => {

    return (
        <TouchableHighlight onPress={onPress} underlayColor={underlayColor} >
            {children}
        </TouchableHighlight>
    )


}

export default Button;
