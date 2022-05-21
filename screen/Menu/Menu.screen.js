import React from 'react';
import { Button } from '../../components';
import buttonName from '../../res/buttonName';
import colors from '../../res/colors';
import onPress from '../../res/onPress';
import Styles from '../../res/styles';



const Menu = () => {
    return (
        <Button style={Styles} color={colors.purple} onPress={onPress.profile.route} name={buttonName.profile.text} />
    )
}

export default Menu;
