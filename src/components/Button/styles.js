import {StyleSheet} from 'react-native';
import * as widthPercents from '../../utils/sizes';
import * as colors from '../../utils/colors';

export default StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: widthPercents._03,
    marginVertical: widthPercents._01
  },

  text: {
    color: colors.text
  }
});
