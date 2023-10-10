import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './Cargo.styles';
import {IC_CHECKMARK} from '../../assets';

interface ICargo {
  route: any;
  navigation: any;
}

const Cargo = ({route, navigation}: ICargo) => {
  const {dataCargo, onSelect} = route.params;

  const onPress = (_id: number) => {
    onSelect(_id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {dataCargo.map(({image, label, id, selected}) => (
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => onPress(id)}
            key={id}
            style={styles.btn}>
            <Image source={image} style={styles.icon} />
            <View style={styles.wrapper}>
              <Text style={styles.label}>{label}</Text>
              {selected && <Image source={IC_CHECKMARK} style={styles.arrow} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Cargo;
