import {StyleSheet} from 'react-native';
import * as widthPercents from '../../utils/sizes';
import * as colors from '../../utils/colors';

export const leftBtnColor = colors.highlighted;

export default StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: widthPercents._04
  }
});
