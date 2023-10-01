import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './OptionField.styles';
import {IC_CHEVRON_RIGHT} from '../../assets';
import {IOptionField} from './OptionField.types';

const OptionField = ({valueIcon, onPress}: IOptionField) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.75} style={styles.btn}>
      <Image source={valueIcon} style={styles.cargo} />
      <Image source={IC_CHEVRON_RIGHT} style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default OptionField;
