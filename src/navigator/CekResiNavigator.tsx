import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CekResi from '../screens/CekResi/CekResi';
import Cargo from '../screens/Cargo/Cargo';

const Stack = createNativeStackNavigator();

const CekResiNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CekResi"
        component={CekResi}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Cargo" component={Cargo} />
    </Stack.Navigator>
  );
};

export default CekResiNavigator;
