import React from 'react'
import TopicPills from './TopicPills'
import LessonTab from '../components/LessonTabb'
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

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        // this.deleteLesson = this.deleteLesson.bind(this);
        this.lessonService = LessonService.instance;
    };

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.findAllLessons(this.props.moduleId);

    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson: {title: event.target.value}});
    }

    findAllLessons(moduleId) {
        this.lessonService.findAllLessons(moduleId)
            .then((lessons) => {
                this.setLessons(lessons)
            });
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }


    createLesson(event) {
        this.lessonService
            .createLesson(this.state.moduleId, this.state.lesson)
            .then(() => {
                this.findAllLessons(this.state.moduleId);
            });
    }

    //
    // deleteLesson(lessonId) {
    //     console.log('delete ' + lessonId);
    //     this.moduleService
    //         .deleteModule(moduleId)
    //         .then(() => {
    //             this.findAllModulesForCourse(this.state.courseId);
    //         });
    // }

    renderLessons() {
        //let deleteLesson = this.deleteLesson;
        let courseId = this.state.courseId;
        let moduleId = this.state.moduleId;
        let lessons = null;
        if (this.state) {
            lessons = this.state.lessons.map(function (lesson) {
                return <LessonTab
                    moduleId={moduleId} courseId={courseId} lesson={lesson} key={lesson.id}/>
            });
        }
        return lessons;
    }

    render() {
        return (
            <div className="container-fluid">
                <ul className="nav nav-tabs ">
                    {this.renderLessons()}
                    <li className="nav-item">
                        <input className="form-control"
                               onChange={this.titleChanged}
                               placeholder="title"/>
                    </li>
                    <li className="nav-item">
                        <i onClick={this.createLesson} className="btn fa fa-plus">
                        </i>
                    </li>
                </ul>
            </div>

        );
    }
}
