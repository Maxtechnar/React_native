import { StyleSheet } from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.black,
        textAlign: 'center',
        fontFamily: "Cochin",
        marginTop: 30,
    },
    mainText: {
        fontSize: 20,
        color: "black",
        marginTop: 20,
        textAlign: "justify",
        width: 390,
        marginLeft: 10
    },
    skillsLogo: {
        width: 60,
        height: 60,
        marginLeft: 33,
    },
    skills: {

    },
    blockItem: {

        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        position: 'relative',
    }
});

export default styles;
