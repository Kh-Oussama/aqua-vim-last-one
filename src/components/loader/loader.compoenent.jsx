import React from 'react';
import './loader.style.scss'
import LoaderContent from "../loader-content/loader.compoenent";

const Loader = () => {
    return (
        <div className="loader_content">
          <div>
              <img src="/images/logo-l.png" alt="Logo"/>
          </div>
            <div>
                <LoaderContent/>
            </div>

        </div>
    )
}

export default Loader;