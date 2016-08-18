import {StyleSheet} from 'react-native';
import {headerHeight} from '../NavBar/styles';
import * as widthPercents from '../../utils/sizes';
import * as colors from '../../utils/colors';

export default StyleSheet.create({
  cont: {
    flex: 1,
    padding: widthPercents._04,
    marginTop: headerHeight
  },

  h1: {
    fontSize: widthPercents._06,
    color: colors.text,
    marginBottom: widthPercents._04
  },

  p: {
    color: colors.text,
    marginBottom: widthPercents._02
  },

  btn: {
    borderRadius: widthPercents._02,
    borderColor: colors.highlighted,
    borderWidth: 1
  }
});
