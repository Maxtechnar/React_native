import colors from "../../res/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        display: "flex",
    },
    button: {
        color: colors.black,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 16,
        marginTop: 12,
    },
    arrow: {
        fontSize: 20,
        color: colors.black,
    },
    icon: {
        alignItems: "flex-end",
        bottom: 22,
        right: 10
    }
})
