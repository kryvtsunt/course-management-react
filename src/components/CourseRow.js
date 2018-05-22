import React from 'react'
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>
                    <Link className="text-white" to={`/course/${this.props.course.id}`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>
                    <i className="btn btn-danger fa fa-times" onClick={() =>
                    {this.props.delete(this.props.course.id)}}>
                    </i>
                </td>
            </tr>

        )
    }
}

export default CourseRow;