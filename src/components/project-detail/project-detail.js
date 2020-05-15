import React, {useState, useEffect} from 'react';
import ReactHtmlParser from 'react-html-parser'; 

const ProjectDetail = (props) => {

    const [content, setContent] = useState(props.data)

    if (content){

        console.log('content')
        console.log(content)

        const Tag = (props) => {
            return (
                <li className="card-layout php">
                    <span className="bagde-tag">{props.name}</span>
                </li>
            )
        }

        const TagsHandler = () => {
            return (content.tags.map(data => <Tag key={data.name} name={data.name} />))
        }

        return(
            <div className="job-detail card-layout">
                <div className="row">
                    <div className="col-md-4">
                        <div className="image">
                            <img src=""
                                width="150px"
                                src={content.media[0].url}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="content">

                            { ReactHtmlParser (content.value) }

                        </div>
                        <div className="badges-container">
                            <ul>
                                <TagsHandler />
                                {/* <li className="card-layout php">
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
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )

    } else {
        return '';
    }

    

}

export default ProjectDetail;