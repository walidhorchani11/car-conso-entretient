 import React from 'react';
 import {
   View,
 } from 'react-native';

 // 1 - importer json file in assets
 // 2 - import it
 // 3 -install lottie react native
 // voir doc for use : import LottieView from 'lottie-react-native';
 // import splashjson from '../../assets/splashscreen.json';
 import LottieView from 'lottie-react-native';

 const Splash = () => {
   return (
     <View style={{flex: 1}}>
     <LottieView
     source={require('../../assets/splashscreen.json')}
     autoPlay
     loop
   /> 
     </View>
      );
 };

 export default Splash;
