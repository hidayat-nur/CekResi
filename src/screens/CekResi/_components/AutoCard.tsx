import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './AutoCard.styles';
import {IC_TRASH} from '../../../assets';

interface IAutoCard {
  label: string;
  onPress: () => void;
}

const AutoCard = ({label, onPress}: IAutoCard) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.75}
      style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={styles.trash}>
        <Image source={IC_TRASH} style={styles.icon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default AutoCard;
