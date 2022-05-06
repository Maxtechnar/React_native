import React from 'react';
import { View, ScrollView } from 'react-native';
import ProfileName from './components/ProfileName/ProfileName';
import AboutMe from './components/AboutMe/AboutMe';

const App = () => {
  return (
    <ScrollView>
      <View>
        <ProfileName />
        <AboutMe />
      </View>
    </ScrollView>
  );
};

export default App;
