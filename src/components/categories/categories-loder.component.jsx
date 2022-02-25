import React from 'react';
import MenuItemLoader from "../categories-item/categories-item-loader.component";

const CollectionsLoader= () => (
    <React.Fragment>
        <div className="directory-menu__1">
            <MenuItemLoader/>
            <MenuItemLoader/>

        </div>
        <div className="directory-menu__2">
            <MenuItemLoader/>
            <MenuItemLoader/>
            <MenuItemLoader/>
        </div>
    </React.Fragment>
)

export default CollectionsLoader;