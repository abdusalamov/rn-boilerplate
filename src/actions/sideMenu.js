export const CHANGE_SIDE_MENU_STATE = 'CHANGE_SIDE_MENU_STATE';

export const changeSideMenuState = isOpen => ({
  type: CHANGE_SIDE_MENU_STATE,
  isOpen
});
