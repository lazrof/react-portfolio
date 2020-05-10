import React from 'react';


const Navbar = () => {

    return (
    <>
        <div className="d-flex flex-column flex-md-row align-items-center fixed-nav">
            <h5 className="my-0 mr-md-auto font-weight-normal">Nunzio Ruffo Portfolio</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="pt-2 px-4 text-dark" href="#">Projects</a>
                <a className="pt-2 px-5 text-dark" href="#">Blog</a>
            </nav>
        </div>
    </>
    )

}

export default Navbar;