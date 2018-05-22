import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import CourseService from '../services/CourseSerice'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectCourse.bind(this);
        this.findCourseById = this.findCourseById(this);
        this.state = {
            course: '',
            courseId: '',
            moduleId: ''
        };
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        if (this.props.match.params.moduleId) {
            this.selectModule(this.props.match.params.moduleId);
        }
        this.findCourseById(this.state.courseId);

    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    componentWillReceiveProps(newProps) {
        this.selectCourse(newProps.match.params.courseId);
        this.selectModule(newProps.match.params.moduleId);
    }

    findCourseById(courseId) {
        this.courseService.findCourseById(courseId)
            .then((course) => {
                console.log(course);
                this.setState({course: course});
                console.log(this.state.course)
            });
    }

    render() {
        return (
            <Router>
                <div>
                    {/*<h2> Editing course: {this.state.courseId}</h2>*/}
                    <div className="row">
                        <div className="col-4">
                            <h2>
                                {this.state.course.title}
                            </h2>
                            <ModuleList courseId={this.state.courseId}/>
                        </div>
                        <div className="col-8">
                            <Route path="/course/:courseId/module/:moduleId" component={LessonTabs}/>
                            {/*<h2>Lessons</h2>*/}
                            {/*<LessonTabs*/}
                                {/*moduleId={this.state.moduleId}*/}
                            {/*/>*/}
                        </div>
                    </div>

                </div>

            </Router>

        )
    }
}
