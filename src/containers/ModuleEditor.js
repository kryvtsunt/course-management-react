import React from 'react'
import TopicPills from './TopicPills'
import LessonTabs from './LessonTabs'
import ModuleService from '../services/ModuleService'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default class ModuleManager
    extends React.Component {
    constructor(props) {
        super(props);
        this.moduleService = ModuleService.instance;
        this.selectCourse = this.selectCourse.bind(this);
        this.selectModule = this.selectCourse.bind(this);
        this.findModuleById = this.findModuleById.bind(this);
        this.state = {
            module: '',
            courseId: '',
            moduleId: '',
            lessonId: ''
        };
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);
        if (this.props.match.params.lessonId) {
            this.selectModule(this.props.match.params.lessonId);
        }
        this.findModuleById(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.selectCourse(newProps.match.params.courseId);
        this.selectModule(newProps.match.params.moduleId);
        this.findModuleById(newProps.match.params.moduleId);
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    findModuleById(moduleId) {
        this.moduleService.findModuleById(moduleId)
            .then((module) => {
                this.setState({module: module});
                //console.log(this.state.course)
            });
    }

    render() {
        return (
            <Router>
            <div className="container-fluid">
                <h2>
                    {this.state.module.title}
                </h2>
                <LessonTabs courseId={this.props.match.params.courseId} moduleId={this.props.match.params.moduleId}/>
                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId" component={TopicPills}/>
            </div>
            </Router>

        );
    }
}
