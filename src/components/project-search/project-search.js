import React, {useState} from 'react';


const ProjectSearch = () => {

    return(
    <>
        <div className="bordered-title">
            <div className="row projects-header">
                <div className="col-md-4">
                    <h1>See my Jobs</h1>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <form action="#" className="d-none">
                    <input id="search-project" placeholder="Python, Restful API, Postgres... " type="text"/>
                    <label className="search-icon" htmlFor="search-project"><i className="fas fa-search"></i></label>
                </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProjectSearch;