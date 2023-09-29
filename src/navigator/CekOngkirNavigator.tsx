import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cargo from '../screens/Cargo/Cargo';
import CekOngkir from '../screens/CekOngkir/CekOngkir';

const Stack = createNativeStackNavigator();

const CekOngkirNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CekOngkir" component={CekOngkir} />
      <Stack.Screen name="Cargo" component={Cargo} />
    </Stack.Navigator>
  );
};

export default CekOngkirNavigator;
