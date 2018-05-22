import React from 'react'
import TopicPills from './TopicPills'
import LessonService from '../services/LessonService'

export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {title: ''},
            lessons: []
        };

        this.setLessonId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleService = ModuleService.instance;
    };

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }


    setModules(modules) {
        this.setState({modules: modules})
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)
            });
    }


    createModule(event) {
        console.log(this.state.module);
        this.moduleService
            .createModule(this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
    }

    deleteModule(moduleId) {
        console.log('delete ' + moduleId);
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
    }

    renderLessons() {
        let deleteModule = this.deleteModule;
        let courseId = this.state.courseId;
        let modules = null;
        if (this.state){
            modules = this.state.modules.map(function (module) {
                return <ModuleListItem
                    courseId={courseId} module={module} key={module.id} delete={deleteModule}/>
            });
        }
        return modules;
    }

    render() {
        return (
            <div className="container-fluid">
                <ul className="nav nav-tabs ">
                    <li className="nav-item"><a className="nav-link active"
                                                href="#">Active Tab</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Another Tab</a></li>
                </ul>
            </div>

        );
    }
}
