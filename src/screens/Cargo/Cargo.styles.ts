import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 20,
    rowGap: 2,
  },
  btn: {
    width: '100%',
    backgroundColor: Colors.SystemWhite,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 62,
  },
  wrapper: {
    flexDirection: 'row',
  },
  icon: {
    width: 62.5,
    height: 40,
  },
  arrow: {
    marginLeft: 12,
    width: 14.302,
    height: 14.186,
  },
  label: {
    color: Colors.SystemGrayDark04,
    fontFamily: Fonts.roboto.normal,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
});
