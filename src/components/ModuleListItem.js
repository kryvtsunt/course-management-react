import React from 'react';
import {Link} from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item bg-dark">
                <Link className="text-white" to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                <span className="float-right">
                    <i className="btn btn-danger fa fa-times" onClick={() => {
                        this.props.delete(this.props.module.id)
                    }}>
                    </i>
                </span>
            </li>
        );
    }
}
