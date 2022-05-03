import React from 'react';
import { View } from 'react-native';
import ProfileName from './components/profileName/profileName';
import AboutMe from './components/aboutMe/aboutMe';

const App = () => {
  return (
    <View>
      <ProfileName />
      <AboutMe />
    </View>
  );
};

export default App;
