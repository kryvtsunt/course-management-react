import React from 'react'
import LessonTabs from '../child/LessonTabs'
import ModuleService from '../../services/ModuleService'
import LessonEditor from './LessonEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default class ModuleManager
    extends React.Component {
    constructor(props) {
        super(props);
        this.moduleService = ModuleService.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
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
                <LessonTabs courseId={this.state.courseId} moduleId={this.state.moduleId}/>
                <br/>
                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId" component={LessonEditor}/>
            </div>
            </Router>

        );
    }
}
