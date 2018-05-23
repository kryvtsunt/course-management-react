import React from 'react'
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.getFormattedDate = this.getFormattedDate.bind(this);
    }

    getFormattedDate(date) {
        let year = date.getFullYear();

        let month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return year + '-' + month + '-' + day;
    }

    render() {
        return (
            <tr>
                <td>
                    <Link className="text-white" to={`/course/${this.props.course.id}`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>Me</td>
                <td>{this.props.course.created}</td>
                <td>{this.props.course.modified}</td>
                    <i className="btn btn-block fa fa-2x fa-trash" onClick={() =>
                    {this.props.delete(this.props.course.id)}}>
                    </i>
            </tr>

        )
    }
}

export default CourseRow;