import React from "react";
import {Link, withRouter} from 'react-router-dom';

const EventItem = ({title, history, description,date, imageUrl, linkUrl = '/categories/sous_Categories', match, loa}) => {
    const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function parseDate(input) {
        var parts = input.match(/(\d+)/g);
        return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
    }

    const d = parseDate(date);
    return (
        <div className="event_card">
            <div className="image-data">
                <div className="event_date">
                    <div className="event_date-day">{d.getDate()}</div>
                    <div className="event_date-month">{months[(d.getMonth())]}</div>
                </div>
            </div>

            <div className="post-data">
                <h1 className="title"><i className="fas fa-toolbox"></i> {title}</h1>
                <h2 className="subtitle"><i className="far fa-clock"/> L'année {(d.getFullYear())}</h2>
                <p className="description">
                    {description}
                    </p>
                {/*<div className="cta">*/}
                {/*    <Link to={linkUrl}>*/}
                {/*        Consulter &rarr;*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default withRouter(EventItem);
