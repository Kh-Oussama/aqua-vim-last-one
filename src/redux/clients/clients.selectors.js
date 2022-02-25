import {createSelector} from 'reselect';

const selectClient = state => state.client;


/////////add selectors
export const selectAddStatus = createSelector(
    [selectClient],
    client => client.addStatus
);

export const selectAddError = createSelector(
    [selectClient],
    client => client.addErrorMessage
);
export const selectAddLoading = createSelector(
    [selectClient],
    client => client.addLoading
);

///send message
export const selectSendMsgStatus = createSelector(
    [selectClient],
    client => client.sendMsgStatus
);

export const selectSendMsgError = createSelector(
    [selectClient],
    client => client.sendErrorMessage
);
export const selectSendMsgLoading = createSelector(
    [selectClient],
    client => client.sendMsgLoading
);