import React from 'react';
import { View, ScrollView } from 'react-native';
import AboutMe from './screen/AboutMe/AboutMe.screen';
import ProfileName from './Components/ProfileName/ProfileName';




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
