import React, {useState} from 'react';
import './loader.scss'

const Loader = () => {

    return(
        <>
            <div className="loader-container">
                <div className="loader">
                    <i className="fas fa-code"></i>
                </div>
            </div>
        </>
    )

}

export default Loader;