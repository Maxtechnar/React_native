import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProfileName = () => {
    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.body}>
                <Text style={styles.titleText}>Максим Чернявский</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
        fontFamily: "Cochin",
        marginTop: 20,
    },
    ScrollView: {
        backgroundColor: '#5e29e3',
        height: 80,
    },
});


export default ProfileName;