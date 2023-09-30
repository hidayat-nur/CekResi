import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './TextFieldSearch.styles';
import {Colors, IC_CLOSE_ICON} from '../../assets';
import {ITextFieldSearch} from './TextFieldSearch.types';

const TextFieldSearch = ({
  value,
  onChangeText,
  placeholder = '',
}: ITextFieldSearch) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textinput}
        placeholder={placeholder}
        placeholderTextColor={Colors.SystemGrayLight02}
      />
      {value && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onChangeText('')}
          activeOpacity={0.75}>
          <Image source={IC_CLOSE_ICON} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextFieldSearch;
