import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 87,
    paddingHorizontal: 15,
    backgroundColor: Colors.SystemGrayLight06,
  },
  content: {
    rowGap: 10,
    position: 'relative',
  },
  cargo: {},
  auto: {
    position: 'absolute',
    backgroundColor: Colors.SystemWhite,
    top: 54,
    left: 0,
    right: 0,
    padding: 15,
    rowGap: 10,
  },
  autoTitle: {
    color: Colors.SystemGrayLight02,
    fontFamily: Fonts.roboto[500],
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
  },
  autoList: {},
});
