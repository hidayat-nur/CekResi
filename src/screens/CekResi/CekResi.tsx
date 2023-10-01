import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './CekResi.styles';
import TextFieldSearch from '../../components/TextField/TextFieldSearch';
import OptionField from '../../components/OptionField/OptionField';
import {
  IC_ANTER_AJA,
  IC_JNE,
  IC_JNT,
  IC_POS_INDONESIA,
  IC_SHOPEE_EXPRESS,
} from '../../assets';

const CekResi = () => {
  const [resi, setResi] = useState<string>('');
  const [cargo, setCargo] = useState<any>([
    {
      id: 1,
      icon: IC_JNT,
      selected: true,
    },
    {
      id: 2,
      icon: IC_JNE,
      selected: false,
    },
    {
      id: 3,
      icon: IC_POS_INDONESIA,
      selected: false,
    },
    {
      id: 4,
      icon: IC_ANTER_AJA,
      selected: false,
    },
    {
      id: 5,
      icon: IC_SHOPEE_EXPRESS,
      selected: false,
    },
  ]);
  const cargoSelected = cargo.find((_i: any) => _i.selected);

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
      <OptionField valueIcon={cargoSelected.icon} onPress={() => {}} />
    </ScrollView>
  );
};

export default CekResi;
