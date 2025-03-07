import React from "react";
import {Link, withRouter} from 'react-router-dom';

const MenuItem = ({title, history, description, imageUrl, subtitle, linkUrl, match}) => {
    return (
        <div className="category_card">
            <div className="image-data">
                <div className="background_image" style={{
                    backgroundImage: 'url(https://www.admin.aqua-vim.com/' + imageUrl + ')',
                }}

                />
                <div className="publication-details">
                    <div className="author">
                            <svg  viewBox="0 -52 480 480"  xmlns="http://www.w3.org/2000/svg"><path d="m472 296h-88v-16h40c4.417969 0 8-3.582031 8-8v-24h24c4.417969 0 8-3.582031 8-8v-96c0-4.417969-3.582031-8-8-8h-24v-24c0-4.417969-3.582031-8-8-8h-80v-16h32c4.417969 0 8-3.582031 8-8v-32c0-3.03125-1.710938-5.804688-4.425781-7.160156l-16-8c-1.109375-.554688-2.332031-.839844-3.574219-.839844h-16v-24c0-4.417969-3.582031-8-8-8h-48c-4.417969 0-8 3.582031-8 8v24h-16c-1.242188 0-2.464844.285156-3.574219.839844l-16 8c-2.714843 1.355468-4.425781 4.128906-4.425781 7.160156v32c0 4.417969 3.582031 8 8 8h32v16h-56c-2.519531 0-4.890625 1.1875-6.398438 3.199219l-24 32c-1.039062 1.386719-1.601562 3.070312-1.601562 4.800781v16h-32v-72h16v-16h-80v16h16v40h-24c-2.121094 0-4.15625.84375-5.65625 2.34375l-16 16c-1.5 1.5-2.34375 3.535156-2.34375 5.65625v16h-48v80h16v-32h32v16c0 2.121094.84375 4.15625 2.34375 5.65625l16 16c1.5 1.5 3.535156 2.34375 5.65625 2.34375h24v40h-104c-4.417969 0-8 3.582031-8 8v64c0 4.417969 3.582031 8 8 8h464c4.417969 0 8-3.582031 8-8v-64c0-4.417969-3.582031-8-8-8zm-104 0h-16v-16h16zm-80 0v-16h48v16zm-128 0v-72h32v16c0 1.730469.5625 3.414062 1.601562 4.800781l24 32c1.507813 2.011719 3.878907 3.199219 6.398438 3.199219h16v16zm96-16h16v16h-16zm192-128v80h-16v-80zm-152-136h32v16h-32zm-40 36.945312 9.886719-4.945312h92.226562l9.886719 4.945312v19.054688h-112zm40 35.054688h32v16h-32zm-88 58.664062 20-26.664062h188v144h-188l-20-26.664062zm-16 29.335938v32h-32v-32zm-64-88h16v40h-16zm-96 112v-16h32v16zm48 28.6875v-73.375l11.3125-11.3125h52.6875v96h-52.6875zm48 27.3125h16v40h-16zm336 104h-448v-48h448zm0 0"/><path d="m240 136h144v16h-144zm0 0"/><path d="m240 168h144v16h-144zm0 0"/><path d="m240 200h144v16h-144zm0 0"/><path d="m240 232h144v16h-144zm0 0"/><path d="m48 328h32v16h-32zm0 0"/><path d="m104 328h16v16h-16zm0 0"/><path d="m416 328h16v16h-16zm0 0"/><path d="m112 160h16v16h-16zm0 0"/></svg> Aqua Vim
                    </div>
                    <span className="date"><i className="fas fa-calendar-alt"/> Marsh 30, 2020</span>
                </div>

            </div>
            <div className="post-data">
                <Link to={`/categories/sous_Categories/${linkUrl}`}>
                <h1 className="title"><i className="fas fa-toolbox"></i> {title}</h1>
                </Link>
                <h2 className="subtitle"> {subtitle} ....</h2>
                <p className="description">
                    {description}
                </p>
                <div className="cta">
                    <Link to={`/categories/sous_Categories/${linkUrl}`}>
                        Consulter &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
