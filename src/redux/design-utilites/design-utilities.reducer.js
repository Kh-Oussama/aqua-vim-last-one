import DesignActionTypes from "./design-utilities.types";

const INITIAL_STATE = {
  current_page : "/",
  search_hidden : true,
    to_top_button_hidden: false,
};

const designUtilitiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case DesignActionTypes.SET_TO_TOP_BUTTON:
          return {
              ...state,
              to_top_button_hidden: action.payload,
          };
      case DesignActionTypes.SET_CURRENT_PAGE_NAV:
          return {
              ...state,
              current_page: action.payload,
          };
      case DesignActionTypes.TOGGLE_SEARCH_HIDDEN:
          return {
              ...state,
              search_hidden: !state.search_hidden,
          };
      default:
          return state;
  }
};

export default designUtilitiesReducer;
