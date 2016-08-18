import {StyleSheet} from 'react-native';
import * as widthPercents from '../../utils/sizes';
import * as colors from '../../utils/colors';

export const underlineColor = colors.highlighted;

export default StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: widthPercents._04,
    paddingTop: widthPercents._12,
    flex: 1
  },

  inputCont: {
    flexDirection: 'row'
  },

  input: {
    flex: 1
  }
});
