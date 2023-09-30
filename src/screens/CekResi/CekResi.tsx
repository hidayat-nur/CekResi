import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './CekResi.styles';
import TextFieldSearch from '../../components/TextField/TextFieldSearch';

const CekResi = () => {
  const [resi, setResi] = useState<string>('');

  const onChangeResi = (_text: string) => {
    setResi(_text);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <TextFieldSearch
        value={resi}
        onChangeText={onChangeResi}
        placeholder="ketik resi disini"
      />
    </ScrollView>
  );
};

export default CekResi;
