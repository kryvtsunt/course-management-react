import React from 'react'
import ModuleList from '../child/ModuleList'
import ModuleEditor from './ModuleEditor'
import CourseService from '../../services/CourseSerice'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.findCourseById = this.findCourseById.bind(this);
        this.state = {
            course: '',
            courseId: '',
        };
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.findCourseById(this.props.match.params.courseId);

    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    findCourseById(courseId) {
        this.courseService.findCourseById(courseId)
            .then((course) => {
                this.setState({course: course});
            });
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="container-fluid">
                        <nav className="navbar navbar-dark" style={{backgroundColor: '#202020'}}>
                            <span className="navbar-brand">
                                <h2>
                                    {this.state.course.title}
                                </h2>
                            </span>
                            <span className="navbar-right">
                                <a href='/courses'>
                                    <i className="btn text-white fa fa-2x fa-home"></i>
                                </a>
                            </span>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <ModuleList courseId={this.state.courseId}/>
                        </div>
                        <div className="col-8">
                            <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>
                        </div>
                    </div>

                </div>

            </Router>

        )
    }
}
