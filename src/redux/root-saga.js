import { all, call } from 'redux-saga/effects';
import {sliderSagas} from "./slliders/slider.sagas";
import {ReferenceSagas} from "./references/reference.sagas";
import {CategorySagas} from "./categories/categories.sagas";
import {SubcategorySagas} from "./subcategories/subcategories.sagas";
import {ProductSagas} from "./products/products.sagas";
import {ClientSagas} from "./clients/clients.sagas";
import {EventSagas} from "./events/events.sagas";
import {MarkSagas} from "./marks/marks.sagas";
import {ServiceSagas} from "./services/services.sagas";
import {ConfigSagas} from "./config/config.sagas";




export default function* rootSaga() {
    yield all([
        call(sliderSagas),
        call(ReferenceSagas),
        call(CategorySagas),
        call(SubcategorySagas),
        call(ProductSagas),
        call(ClientSagas),
        call(EventSagas),
        call(MarkSagas),
        call(ServiceSagas),
        call(ConfigSagas),
    ])
};
