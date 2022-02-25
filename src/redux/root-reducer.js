import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import designUtilitiesReducer from "./design-utilites/design-utilities.reducer";
import sliderReducer from "./slliders/slider.reducer";
import referenceReducer from "./references/reference.reducer";
import categoriesReducer from "./categories/categories.reducer";
import subcategoryReducer from "./subcategories/subcategory.reducer";
import productReducer from "./products/product.reducer";
import clientsReducer from "./clients/clients.reducer";
import eventsReducer from "./events/events.reducer";
import marksReducer from "./marks/marks.reducer";
import servicesReducer from "./services/services.reducer";
import configReducer from "./config/config.reducer";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''],
};

const rootReducer = combineReducers({
    design_utilities: designUtilitiesReducer,
    slider : sliderReducer,
    reference : referenceReducer,
    category : categoriesReducer,
    subcategory : subcategoryReducer,
    product : productReducer,
    client : clientsReducer,
    event : eventsReducer,
    mark : marksReducer,
    service: servicesReducer,
    config: configReducer,
});

export default persistReducer(persistConfig, rootReducer);

