import * as constants from '../constants/navigationConstants';

export const navTo = route => {
  return {
    type: constants.NAV_NAVIGATE,
    payload: route,
  };
};
