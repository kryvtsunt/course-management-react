import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {courseId: ''};
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }


    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    componentWillReceiveProps(newProps){
        this.selectCourse
        (newProps.match.params.courseId);
    }

    render() {
        return (
            <div>
                <h2> Editing course: {this.state.courseId}</h2>
                <div className="row">
                    <div className="col-4">
                        <h2>Modules</h2>
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                    <div className="col-8">
                        <h2>Lessons</h2><LessonTabs/>
                    </div>
                </div>
            </div>

        )
    }
}
