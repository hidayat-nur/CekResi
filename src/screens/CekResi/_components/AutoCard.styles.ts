import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../assets';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.SystemWhite,
    borderBottomWidth: 2,
    backgroundColor: Colors.SystemGrayLight06,
    paddingHorizontal: 10,
  },
  label: {
    color: Colors.SystemGrayDark04,
    fontFamily: Fonts.roboto.normal,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
  icon: {
    width: 22,
    height: 22,
  },
  trash: {
    height: 62,
    justifyContent: 'center',
    paddingHorizontal: 10,
    right: -10,
  },
});
