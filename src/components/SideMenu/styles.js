import {StyleSheet} from 'react-native';
import * as widthPercents from '../../utils/sizes';
import * as colors from '../../utils/colors';

export default StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'space-between',
    padding: widthPercents._04,
    paddingTop: widthPercents._12,
    backgroundColor: colors.borders
  },

  btn: {
    alignItems: 'flex-start',
  }
});
