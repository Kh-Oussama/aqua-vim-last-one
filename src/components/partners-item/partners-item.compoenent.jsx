import React from 'react';
import {motion} from "framer-motion";


const Partner = ({name,imageUrl}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2, originX:0}}
            transition={{ type: 'spring', stiffness: 500}}
            whileTap={{ scale: 0.9 }}

            className="carts__cart">
            <img src={`https://www.admin.aqua-vim.com/${imageUrl}`} alt="" className="carts__cart--img"/>
            <h4 className="carts__cart--title">{name}</h4>
            <div className="red-divider"/>
        </motion.div>
    )
}

export default Partner;