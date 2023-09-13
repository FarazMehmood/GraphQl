import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2000);
  }, []);
  return (
    <View>
      <Text style={{flex:1,alignSelf:'center',alignItems:'center',fontSize:24,}}>WonderCrafts</Text>
    </View>
  );
};

export default Splash;
