import DesignActionTypes from "./design-utilities.types";

export const toggleSearchHidden = () => ({
   type: DesignActionTypes.TOGGLE_SEARCH_HIDDEN,
});

export const setCurrentPage = current_page => ({
   type: DesignActionTypes.SET_CURRENT_PAGE_NAV,
   payload: current_page
});

export const setToTopButton = current_state => ({
   type: DesignActionTypes.SET_TO_TOP_BUTTON,
   payload: current_state
});


