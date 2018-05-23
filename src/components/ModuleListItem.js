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
                <div className="btn-group btn-block">
                    <Link
                        className={(this.props.active == this.props.module.id) ? 'text-white btn btn-block btn-dark active' : 'text-white btn btn-block btn-dark'}
                        onClick={()=> {this.props.setActive(this.props.module.id)}}
                        to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                        {this.props.module.title}
                    </Link>
                    <span className="float-right">
                    <i className="btn fa fa-2x fa-times" onClick={() => {
                        this.props.delete(this.props.courseId, this.props.module.id)
                    }}>
                    </i>
                </span>
                </div>
            </li>
        );
    }
}
