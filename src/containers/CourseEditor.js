import React from 'react'
import ModuleList from './ModuleList'
import ModuleEditor from './ModuleEditor'
import CourseService from '../services/CourseSerice'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectCourse.bind(this);
        this.findCourseById = this.findCourseById.bind(this);
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
        this.findCourseById(this.props.match.params.courseId);

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
                this.setState({course: course});
                //console.log(this.state.course)
            });
    }

    render() {
        return (
            <Router>
                <div>
                    {/*<h2> Editing course: {this.state.courseId}</h2>*/}
                    <div className="container-fluid">
                        <nav className="navbar navbar-dark" style={{backgroundColor: '#202020'}}>
                            <span className="navbar-brand">
                                <h2>
                                    {this.state.course.title}
                                </h2>
                            </span>
                            <span className="navbar-right">
                                <Link className="text-white" to={`/courses`}>
                                    <i className="btn text-white fa fa-2x fa-home"></i>
                                </Link>
                            </span>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <ModuleList courseId={this.state.courseId}/>
                        </div>
                        <div className="col-8">
                            <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>
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
