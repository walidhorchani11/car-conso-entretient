import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Splash from './src/screens/splash/Splash.js';
import useSplash from './src/screens/splash/useSplash.js';

const App = () => {

const {isLoading} = useSplash(5000);

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: 'black'}}>
        <Splash />
      </View>
   );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#99DDCC'}}>
   <Text 
   style={{display: 'flex', justifyContent:'center', alignItems:'center', fontSize: 24 , alignContent:'center'  }}>
   JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA 
   JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA JANJOUNA 
   JANJOUNA JANJOUNA 

   </Text>
    </View>

   );
  
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
