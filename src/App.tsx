import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CekResiNavigator from './navigator/CekResiNavigator';
import CekOngkirNavigator from './navigator/CekOngkirNavigator';
import {Image, Text} from 'react-native';
import {
  SEARCH_ICON,
  SEARCH_ICON_GREEN,
  TRUCK_ICON,
  TRUCK_ICON_GREEN,
} from './assets';
import {styles} from './App.styles';

const Tab = createBottomTabNavigator();
const CustomIcon = ({focused, label}) => {
  let _icon = null;

  switch (label) {
    case 'Cek Resi':
      _icon = focused ? SEARCH_ICON_GREEN : SEARCH_ICON;
      break;
    case 'Cek Ongkir':
      _icon = focused ? TRUCK_ICON_GREEN : TRUCK_ICON;
      break;
    default:
      break;
  }

  return <Image source={_icon} />;
};

const CustomLabel = ({focused, label}) => {
  return (
    <Text style={focused ? styles.labelGreen : styles.label}>{label}</Text>
  );
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="CekResiNavigator"
          component={CekResiNavigator}
          options={{
            tabBarLabel: props => <CustomLabel {...props} label="Cek Resi" />,
            tabBarIcon: props => <CustomIcon {...props} label="Cek Resi" />,
          }}
        />
        <Tab.Screen
          name="CekOngkirNavigator"
          component={CekOngkirNavigator}
          options={{
            tabBarLabel: props => <CustomLabel {...props} label="Cek Ongkir" />,
            tabBarIcon: props => <CustomIcon {...props} label="Cek Ongkir" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
