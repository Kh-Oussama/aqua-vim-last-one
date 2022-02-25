import React, {useEffect} from "react";

import Event from "../events-item/events-item.component.jsx";
import {createStructuredSelector} from "reselect";
import {selectCategories, selectIsFetchingCat} from "../../redux/categories/categories.selectors";
import {fetchCategoriesStart} from "../../redux/categories/categories.actions";
import {connect} from "react-redux";
import {fetchEventsStart} from "../../redux/events/events.actions";
import {selectEvents, selectIsFetchingEv} from "../../redux/events/events.selectors";
import Loader from "../loader-content/loader.compoenent";
import Category from "../categories-item/categories-item.component";

const EventsOverview = ({ fetchEvents, isFetching, events }) => {

    useEffect(() => {
        fetchEvents();
    },[fetchEvents]);
    return (
        <div className="events-section">
            {
                isFetching
               ? <React.Fragment>
                        <div className="loader-container"><Loader/></div>
                        <div className="loader-container"><Loader/></div>

                </React.Fragment>
                    : events.length > 0
                        ? <React.Fragment>
                        <div className="events-section-bg"/>
                            {
                                events.map(event => {
                                    return (
                                        <Event title={event.title} imageUrl={'g1.jpg'} date={event.date} description={event.description}  />
                                    )
                                })
                            }
                        </React.Fragment>
                        : <img src="/images/empty.png" className="empty-img" alt=""/>


            }
    </div>


    )
};

const mapStateToProps = createStructuredSelector({
    isFetching : selectIsFetchingEv,
    events : selectEvents,
});


const mapDispatchToProps = dispatch => ({
    fetchEvents : () => dispatch(fetchEventsStart()),

});

export default connect(mapStateToProps, mapDispatchToProps)(EventsOverview);
