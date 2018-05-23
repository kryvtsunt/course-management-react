import React from 'react'
import TopicService from "../../services/TopicService";
import TopicPill from "../../components/TopicPill";

export default class TopicPills
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: {title: ''},
            topics: []
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createTopic = this.createTopic.bind(this);
        // this.deleteTopic = this.deleteTopic.bind(this);
        this.findAllTopics = this.findAllTopics(this);
        this.topicService = TopicService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
        this.findAllTopics(this.props.courseId, this.props.moduleId, this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.findAllTopics(newProps.courseId, newProps.moduleId, newProps.lessonId);
    }


    setTopics(topics) {
        this.setState({topics: topics})
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


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({topic: {title: event.target.value}});
    }

    findAllTopics(courseId, moduleId, lessonId) {
        this.moduleService
            .findAllModulesForCourse(courseId, moduleId, lessonId)
            .then((topics) => {
                this.setTopics(topics)
            });
    }


    createTopic(event) {
        this.topicService
            .createModule(this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId, this.state.moduleId, this.state.lessonId);
            });
    }

    // deleteModule(moduleId) {
    //     console.log('delete ' + moduleId);
    //     this.moduleService
    //         .deleteModule(moduleId)
    //         .then(() => {
    //             this.findAllModulesForCourse(this.state.courseId);
    //         });
    // }

    renderListOfTopics() {
        //let deleteModule = this.deleteModule;
        let courseId = this.state.courseId;
        let moduleId = this.state.moduleId;
        let lessonId = this.state.lessonId;
        let topics = null;
        if (this.state){
            topics = this.state.topics.map(function (topic) {
                return <TopicPill
                    courseId={courseId} moduleId={moduleId} lessonId={lessonId} topic={topic} key={module.id}/>
            });
        }
        return topics;
    }


    render() {
        return (
            <ul className="nav nav-pills navbar-dark">
                {this.renderListOfTopics()}
            </ul>);
    }
}