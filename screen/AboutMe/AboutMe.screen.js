import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './AboutMe.styles';
import ARRAY_OF_LINK from './AboutMe.constants';

const AboutMe = () => {
    const card = ARRAY_OF_LINK.map(link => <Image
        style={styles.skillsLogo}
        key={link.id}
        source={{
            uri: link.icon
        }}
    />)
    return (
        <ScrollView>
            <View style={styles.body}>
                <Text style={styles.title}>About me</Text>
                <Text style={styles.mainText}>Hello. I'm Max. I'm 25.I was born in Republic of Belarus.
                    My favorite hobby is learning JS and react-redux, relax with my friends.I have proffesional
                    driver's license. I graduated Belarussian National Technical University by speciality
                    "Design and production sports equipments".
                </Text>
                <Text style={styles.titleText}>My skills</Text>
                <View style={styles.blockItem}>
                    {card}
                </View>
            </View>
        </ScrollView>
    );
};

export default AboutMe;
