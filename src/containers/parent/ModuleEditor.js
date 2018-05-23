import React from 'react'
import TopicPills from '../child/TopicPills'
import LessonTabs from '../child/LessonTabs'
import ModuleService from '../../services/ModuleService'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default class ModuleManager
    extends React.Component {
    constructor(props) {
        super(props);
        this.moduleService = ModuleService.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setCourseId.bind(this);
        this.findModuleById = this.findModuleById.bind(this);
        this.state = {
            module: '',
            courseId: '',
            moduleId: '',
        };
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.findModuleById(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.findModuleById(newProps.match.params.moduleId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }


    findModuleById(moduleId) {
        this.moduleService.findModuleById(moduleId)
            .then((module) => {
                this.setState({module: module});
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
                <hr/>
                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId" component={TopicPills}/>
            </div>
            </Router>

        );
    }
}
