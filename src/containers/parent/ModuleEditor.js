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
        this.setLessonId = this.setLessonId.bind(this);
        this.findModuleById = this.findModuleById.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.state = {
            module: 'undefined',
            courseId: 'undefined',
            moduleId: 'undefined',
            lessonId: 'undefined'
        };
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
        this.findModuleById(newProps.match.params.moduleId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }
    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }


    findModuleById(moduleId) {
        if (moduleId != 'undefined')
        this.moduleService.findModuleById(moduleId)
            .then((module) => {
                this.setState({module: module});
            });
    }

    getTitle(){
        if (this.state.module){
            return this.state.module.title;
        }
    }

    render() {
        return (
                <div className="container-fluid">
                    <br/>
                    <h2 className="text-center">
                        {this.getTitle()}
                    </h2>
                    <LessonTabs courseId={this.state.courseId} moduleId={this.state.moduleId} lessonId={this.state.lessonId}/>
                    <br/>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId" component={LessonEditor}/>
                </div>
        );
    }
}
