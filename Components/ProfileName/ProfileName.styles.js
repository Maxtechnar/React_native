import { StyleSheet } from 'react-native';
import colors from '../../res/colors';

const style = StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.white,
        textAlign: 'center',
        fontFamily: "Cochin",
        marginTop: 20,
    },
    body: {
        backgroundColor: colors.purple,
        height: 80,

    },
});

export default style;
