import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../assets';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.SystemWhite,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 44,
  },
  textinput: {
    color: Colors.SystemGrayDark04,
    fontFamily: Fonts.roboto.normal,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    flex: 1,
  },
  btn: {
    right: -15,
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
  },
  icon: {
    width: 17,
    height: 17,
  },
});
