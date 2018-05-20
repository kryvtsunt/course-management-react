import React from 'react';
class CourseRow extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <tr><td>{this.props.title}</td></tr>
        )
    }
}
export default CourseRow;