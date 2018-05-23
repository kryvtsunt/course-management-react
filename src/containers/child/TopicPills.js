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
        this.findAllTopics = this.findAllTopics.bind(this);
        this.topicService = TopicService.instance;
    }

    componentWillMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
        this.findAllTopics(this.props.match.params.courseId, this.props.match.params.moduleId, this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
        // this.findAllTopics(newProps.match.params.courseId, newProps.match.params.moduleId, newProps.match.params.lessonId);
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

    setTopics(topics) {
        this.setState({topics: topics})
    }

    findAllTopics(courseId, moduleId, lessonId) {
        this.topicService
            .findAllTopics(courseId, moduleId, lessonId)
            .then((topics) => {
                this.setTopics(topics)
            });
    }


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({topic: {title: event.target.value}});
    }


    createTopic(event) {
        this.topicService
            .createTopic(this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
            .then(() => {
                this.findAllTopics(this.state.courseId, this.state.moduleId, this.state.lessonId);
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
        if (this.state) {
            topics = this.state.topics.map(function (topic) {
                return <TopicPill
                    courseId={courseId} moduleId={moduleId} lessonId={lessonId} topic={topic} key={topic.id}/>
            });
        }
        return topics;
    }


    render() {
        return (
            <div className="container-fluid">
                <ul className="nav nav-tabs">
                    {this.renderListOfTopics()}
                    <li className="nav-item">
                        <div className="container-fluid">
                            <input className="form-control form-control-sm"
                                   onChange={this.titleChanged}
                                   placeholder="title"/>
                        </div>
                    </li>
                    <li className="nav-item">
                        <i onClick={this.createTopic} className="btn fa fa-plus">
                        </i>
                    </li>
                </ul>
            </div>
        )
    }
}