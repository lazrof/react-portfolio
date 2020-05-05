import React, {useState} from 'react';

const JobDetail = () => {

    return(
        <div className="job-detail card-layout">
            <div className="row">
                <div className="col-md-4">
                    <div className="image">
                        <img src=""
                            width="150px"
                            src={require('../../assets/img/python-logo.png')}
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="content">
                        <h4>My Job Detail</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea quisquam, error consectetur recusandae sint a ut dolor ullam distinctio itaque corporis quaerat facilis quibusdam obcaecati maiores voluptatibus dolorem ipsum.</p>
                        <ul>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, enim.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, enim.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, enim.</li>
                        </ul>
                    </div>
                    <div className="badges-container">
                        <ul>
                            <li className="card-layout php">
                                <span className="bagde-tag">PHP</span>
                            </li>
                            <li className="card-layout js">
                                <span className="bagde-tag">JS</span>
                            </li>
                            <li className="card-layout python">
                                <span className="bagde-tag">Python</span>
                            </li>
                            <li className="card-layout wp">
                                <span className="bagde-tag">Wordpress</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default JobDetail;