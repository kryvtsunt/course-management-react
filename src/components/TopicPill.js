import React from 'react'
import {Link} from 'react-router-dom'


export default class TopicPill
    extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (

            <li className="nav-item ">
                <div className="list-group-item">
                    <a className="nav-link bg-dark active"
                       href="#">
                        {this.props.topic.title}
                    </a>
                    <span className="float-right">
                    <i className="btn fa fa-times" onClick={() => {
                        this.props.delete(this.props.courseId, this.props.moduleId, this.props.lesson.id)
                    }}>
                    </i>
                </span>
                </div>
            </li>

        )
            ;
    }
}
