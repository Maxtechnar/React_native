import { StyleSheet } from "react-native";
import colors from "../../res/colors";

export default StyleSheet.create({
    button: {
        color: colors.black,
        fontSize: 20,
        fontWeight: "bold",
        height: 40,
        marginLeft: 16,
        marginTop: 12

    },
    body: {
        backgroundColor: colors.white,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },
    arrow: {
        position: "absolute",
        fontSize: 20,
        color: colors.black,
        marginTop: 18,
        right: 12
    }
})
