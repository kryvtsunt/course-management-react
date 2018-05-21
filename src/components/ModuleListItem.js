import React from 'react';

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}
                <span className="float-right">
                    <button className="btn btn-danger" onClick={() => {
                        this.props.delete( this.props.courseId, this.props.module.id)
                    }}>
                        Delete
                    </button>
                    {/*<i className="fa fa-trash"></i>*/}
                    {/*<i className="fa fa-pencil"></i>*/}
                </span>
            </li>
        );
    }
}
