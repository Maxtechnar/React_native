import { StyleSheet } from 'react-native';
import colors from '../../../res/colors';

const styles = StyleSheet.create({
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

export default styles;
