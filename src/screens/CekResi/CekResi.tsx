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

interface ICekResi {
  navigation: any;
}

const CekResi = ({navigation}: ICekResi) => {
  const [resi, setResi] = useState<string>('');
  const [cargo, setCargo] = useState<any>([
    {
      id: 1,
      image: IC_JNT,
      label: 'J&T Express',
      selected: true,
    },
    {
      id: 2,
      image: IC_JNE,
      label: 'JNE',
      selected: false,
    },
    {
      id: 3,
      image: IC_POS_INDONESIA,
      label: 'Pos Indonesia',
      selected: false,
    },
    {
      id: 4,
      image: IC_ANTER_AJA,
      label: 'Anter Aja',
      selected: false,
    },
    {
      id: 5,
      image: IC_SHOPEE_EXPRESS,
      label: 'Shopee Xpress',
      selected: false,
    },
  ]);
  const cargoSelected = cargo.find((_i: any) => _i.selected);

  const onChangeResi = (_text: string) => {
    setResi(_text);
  };

  const onCargoselect = (_id: number) => {
    const _cargo_copy = [...cargo];
    const _cargoManipulate = _cargo_copy.map((item: any) => ({
      ...item,
      selected: _id === item.id,
    }));
    setCargo(_cargoManipulate);
  };

  const onCargoNavigate = () => {
    navigation.navigate('Cargo', {
      dataCargo: cargo,
      onSelect: onCargoselect,
    });
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
      <OptionField valueIcon={cargoSelected.image} onPress={onCargoNavigate} />
    </ScrollView>
  );
};

export default CekResi;
