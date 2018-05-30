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
                <div className="btn-group btn-block">
                    <Link className="nav-link bg-dark text-white active"
                          to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}/widget`}>
                        {this.props.topic.title}
                    </Link>
                    <i className="btn fa fa-times" onClick={() => {
                        this.props.delete(this.props.courseId, this.props.moduleId, this.props.lessonId, this.props.topic.id)
                    }}>
                    </i>
                </div>
            </li>

        )
            ;
    }
}
