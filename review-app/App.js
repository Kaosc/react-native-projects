import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNavigator from './routes/Drawer';

const getFonts = () => Font.loadAsync({
    'source-regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'source-bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'source-semibold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
    'source-light': require('./assets/fonts/SourceSansPro-Light.ttf')
});

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){

    return ( <AppNavigator/> );

  } else {
    
    return (

      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)} 
        onError={() => console.log('error')}
      />
      
    )
  }

}