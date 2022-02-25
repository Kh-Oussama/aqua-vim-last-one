import {createSelector} from 'reselect';

const selectDesignUtilities = state => state.design_utilities;

export const selectCurrentPage = createSelector(
    [selectDesignUtilities],
    design_utilities => design_utilities.current_page,
);

export const selectToTopButtonState = createSelector(
    [selectDesignUtilities],
    design_utilities => design_utilities.to_top_button_hidden,
);

export const selectSearchHidden = createSelector(
    [selectDesignUtilities],
    design_utilities => design_utilities.search_hidden,
);

