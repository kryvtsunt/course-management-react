import React from 'react'
import ModuleListItem from '../../components/ModuleListItem'
import ModuleService from '../../services/ModuleService'


export default class ModuleList
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newModule: {title: ''},
            courseId: '',
            modules: []
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.findAllModulesForCourse = this.findAllModulesForCourse.bind(this);
        this.setModules = this.setModules.bind(this);
        this.moduleService = ModuleService.instance;
    }

    componentWillMount() {
        this.setCourseId(this.props.courseId);
        this.findAllModulesForCourse(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)
            });
    }


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({newModule: {title: event.target.value}});
    }


    createModule(event) {
        this.moduleService
            .createModule(this.state.courseId, this.state.newModule)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
    }

    deleteModule(courseId, moduleId) {
        this.moduleService
            .deleteModule(courseId, moduleId)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
    }

    renderListOfModules() {
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
                    {/*<h3> Module List for course: {this.state.courseId}</h3>*/}
                    <ul className="list-group">
                        {this.renderListOfModules()}
                    </ul>
                    <input className="form-control"
                           onChange={this.titleChanged}
                           placeholder="title"/>
                    <button onClick={this.createModule} className="btn btn-dark btn-block">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>

        );
    }
}
