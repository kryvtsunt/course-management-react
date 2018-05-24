import React from 'react'
import LessonTab from '../../components/LessonTabb'
import LessonService from '../../services/LessonService'

export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courseId: undefined,
            moduleId: undefined,
            newLesson: {title: ''},
            lessons: []
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.renderLessons = this.renderLessons.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.lessonService = LessonService.instance;
    };

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
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

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    findAllLessonsForModule(courseId, moduleId) {
        if ((courseId == 'undefined') || (moduleId == 'undefined')) {
            this.setLessons([]);
        } else {
            this.lessonService.findAllLessonsForModule(courseId, moduleId)
                .then((lessons) => {
                    this.setLessons(lessons)
                });
        }
    }


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({newLesson: {title: event.target.value}});
    }


    createLesson(event) {
        let addLesson = {title: 'New Lesson'};
        if (this.state.newLesson.title !== '') {
            addLesson = this.state.newLesson;
        }
        this.lessonService
            .createLesson(this.state.courseId, this.state.moduleId, addLesson)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId, this.state.lesson);
            });
    }


    deleteLesson(courseId, moduleId, lessonId) {
        this.lessonService
            .deleteLesson(courseId, moduleId, lessonId)
            .then(() => {
                this.findAllLessonsForModule(courseId, moduleId);
            });
    }

    renderLessons() {
        let deleteLesson = this.deleteLesson;
        let courseId = this.state.courseId;
        let moduleId = this.state.moduleId;
        let lessons = null;
        if (this.state) {
            lessons = this.state.lessons.map(function (lesson) {
                return <LessonTab
                    moduleId={moduleId} courseId={courseId} lesson={lesson} key={lesson.id} delete={deleteLesson}/>
            });
        }
        return lessons;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <ul className="nav nav-tabs">
                            {this.renderLessons()}
                        </ul>
                    </div>
                    <div className="col-3">
                        <nav className="nav">
                            <form className="form-inline form-group">
                                <input className="form-control"
                                       onChange={this.titleChanged}
                                       placeholder="New Lesson"/>
                                <i onClick={this.createLesson} className="btn fa fa-plus"></i>
                            </form>
                        </nav>
                    </div>
                </div>
            </div>

        );
    }
}
