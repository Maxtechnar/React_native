import colors from '../../res/colors';
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.black,
        textAlign: 'center',
        fontFamily: "Cochin",
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.black,
        textAlign: 'center',
        fontFamily: "Cochin",
        marginTop: 20,
    },
    profileName: {
        backgroundColor: colors.purple,
        height: 80,

    },
    mainText: {
        fontSize: 20,
        color: "black",
        marginTop: 20,
        textAlign: "justify",
        width: 370,
        marginLeft: 10,
        fontWeight: "bold"
    },
    skillsLogo: {
        width: 60,
        height: 60,
        marginLeft: 30,
    },

    blockItem: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        position: 'relative',
    }
});
