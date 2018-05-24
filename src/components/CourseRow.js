import React from 'react'
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.getDate = this.getDate.bind(this);
    }

    getDate(data){
        let dates = String(data).split("T");
        let date = dates[0];
        return date
    }

    getTime(data){
        let dates = String(data).split("T");
        let raw = dates[1]
        let time = raw.split(".")[0];
        return time

    }

    render() {
        return (
            <tr>
                <td>
                    <Link className="text-white" to={`/course/${this.props.course.id}/module/${undefined}/lesson/${undefined}/topic/${undefined}`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>Me</td>
                <td>{this.getDate(this.props.course.created) + ' | ' + this.getTime(this.props.course.created)}</td>
                <td>{this.getDate(this.props.course.modified) + ' | ' + this.getTime(this.props.course.modified)}</td>
                <td>
                    <i className="btn btn-block fa fa-2x fa-trash" onClick={() =>
                    {this.props.delete(this.props.course.id)}}>
                    </i>
                </td>
            </tr>

        )
    }
}

export default CourseRow;