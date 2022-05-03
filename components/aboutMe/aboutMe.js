import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const AboutMe = () => {
    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.body}>
                <Text style={styles.titleText}>About me</Text>
                <Text style={styles.mainText}>Hello. I'm Max. I'm 25.I was born in Republic of Belarus.
                    My favorite hobby is learning JS and react-redux, relax with my friends.I have proffesional
                    driver's license. I graduated Belarussian National Technical University by speciality
                    "Design and production sports equipments".
                </Text>
                <Text style={styles.titleText}>My skills</Text>
                <View style={styles.skills} >
                    <View style={styles.blockItem}>
                        <Image
                            style={styles.skillsLogo}
                            source={{
                                uri: 'https://s1.iconbird.com/ico/2013/9/446/w512h5121380376407MetroUIHTML5.png',
                            }}
                        />
                    </View>
                    <View style={styles.blockItem}>
                        <Image
                            style={styles.skillsLogo}
                            source={{
                                uri: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png',
                            }}
                        />
                    </View>
                    <View style={styles.blockItem}>
                        <Image
                            style={styles.skillsLogo}
                            source={{
                                uri: 'https://img2.freepng.ru/20180411/cvq/kisspng-javascript-html-computer-software-web-browser-watermark-5acdbd54ac19f7.4484983215234327887049.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.blockItem}>
                        <Image
                            style={styles.skillsLogo}
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: 'center',
        fontFamily: "Cochin",
        marginTop: 30,
    },
    mainText: {
        fontSize: 20,
        color: "black",
        marginTop: 20,
        textAlign: "justify"
    },
    ScrollView: {
        marginHorizontal: 7,
    },
    skillsLogo: {
        width: 60,
        height: 60,
    },
    skills: {
        flex: 1,
        flexDirection: 'row',
        position: 'relative',
    },
    blockItem: {
        paddingLeft: 30,
        marginTop: 20,
    }
});


export default AboutMe;