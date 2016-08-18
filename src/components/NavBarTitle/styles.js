import {StyleSheet} from 'react-native';
import * as widthPercents from '../../utils/sizes';
import * as colors from '../../utils/colors';

export default StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: colors.text,
    fontSize: widthPercents._05
  }
});
