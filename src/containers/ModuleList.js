import React from 'react'
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleService'

export default class ModuleList
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {title: ''},
            modules: []
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleService = ModuleService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
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
            .then((modules) => {this.setModules(modules)});
    }


    createModule(event) {
        console.log(this.state.module);
        this.moduleService
            .createModule(this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
    }

    deleteModule(courseId, moduleId) {
        console.log('delete ' + courseId + ' ' + moduleId);
        this.moduleService
            .deleteModule(courseId, moduleId)
            .then(() => {
                this.findAllModulesForCourse(courseId);
            });
    }

    renderListOfModules() {
        let deleteModule = this.deleteModule;
        let courseId = this.state.courseId
        let modules = this.state.modules
            .map(function (module) {
                return <ModuleListItem
                    module={module} courseId={courseId} key={module.id} delete={deleteModule}/>
            });
        return modules;
    }


    render() {
        return (
            <div className="container-fluid">
                <h3> Module List for course: {this.state.courseId}</h3>
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"/>
                <button onClick={this.createModule} className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
                <br/>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}
