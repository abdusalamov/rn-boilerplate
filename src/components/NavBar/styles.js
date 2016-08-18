import {StyleSheet, Navigator, Platform} from 'react-native';
import * as widthPercents from '../../utils/sizes';
import * as colors from '../../utils/colors';

const top = Platform.OS === 'ios' ? 20 : 0;
export const headerHeight = widthPercents._12 + top;

const createNavigationStyle = (styles, headerHeight, top) => {
  //top=20 by default

  styles.Stages.Left.Title.top = top;
  styles.Stages.Left.LeftButton.top = top;
  styles.Stages.Left.RightButton.top = top;

  styles.Stages.Center.Title.top = top;
  styles.Stages.Center.LeftButton.top = top;
  styles.Stages.Center.RightButton.top = top;

  styles.Stages.Right.Title.top = top;
  styles.Stages.Right.LeftButton.top = top;
  styles.Stages.Right.RightButton.top = top;

  //height=64 by default

  styles.Stages.Left.Title.height = headerHeight;
  styles.Stages.Left.LeftButton.height = headerHeight;
  styles.Stages.Left.RightButton.height = headerHeight;

  styles.Stages.Center.Title.height = headerHeight;
  styles.Stages.Center.LeftButton.height = headerHeight;
  styles.Stages.Center.RightButton.height = headerHeight;

  styles.Stages.Right.Title.height = headerHeight;
  styles.Stages.Right.LeftButton.height = headerHeight;
  styles.Stages.Right.RightButton.height = headerHeight;

  return styles;
};
export const navigationStyles = createNavigationStyle(
  Navigator.NavigationBar.StylesIOS,
  headerHeight,
  top
);

export default StyleSheet.create({
  navBar: {
    backgroundColor: colors.background,
    height: headerHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.borders
  }
});
