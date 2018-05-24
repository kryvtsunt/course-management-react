import React from 'react'
import TopicService from "../../services/TopicService";
import TopicPill from "../../components/TopicPill";

export default class TopicPills
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: undefined,
            moduleId: undefined,
            lessonId: undefined,
            newTopic: {title: ''},
            topics: []
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.findAllTopics = this.findAllTopics.bind(this);
        this.topicService = TopicService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.findAllTopics(newProps.courseId, newProps.moduleId, newProps.lessonId);
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
        if ((courseId !== undefined) && (moduleId !== undefined) && (lessonId !== undefined)) {
            this.topicService
                .findAllTopics(courseId, moduleId, lessonId)
                .then((topics) => {
                    this.setTopics(topics)
                });
        } else {
            this.setTopics([])
        }
    }


    titleChanged(event) {
        this.setState({newTopic: {title: event.target.value}});
    }


    createTopic(event) {
        let addTopic = {title: 'New Topic'};
        if (this.state.newTopic.title !== '') {
            addTopic = this.state.newTopic;
        }
        this.topicService
            .createTopic(this.state.courseId, this.state.moduleId, this.state.lessonId, addTopic)
            .then(() => {
                this.findAllTopics(this.state.courseId, this.state.moduleId, this.state.lessonId);
            });
    }

    deleteTopic(courseId, moduleId, lessonId, topicId) {
        this.topicService
            .deleteTopic(courseId, moduleId, lessonId, topicId)
            .then(() => {
                this.findAllTopics(courseId, moduleId, topicId);
            });
    }

    renderListOfTopics() {
        let deleteTopic = this.deleteTopic;
        let courseId = this.state.courseId;
        let moduleId = this.state.moduleId;
        let lessonId = this.state.lessonId;
        let topics = null;
        if (this.state) {
            topics = this.state.topics.map(function (topic) {
                return <TopicPill
                    courseId={courseId} moduleId={moduleId} lessonId={lessonId} topic={topic} key={topic.id}
                    delete={deleteTopic}/>
            });
        }
        return topics;
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <ul className="nav nav-pills">
                            {this.renderListOfTopics()}
                        </ul>
                    </div>

                    <div className="col-3">
                        <nav className="nav">
                            <form className="form-inline form-group">
                                <input className="form-control form-control-sm"
                                       onChange={this.titleChanged}
                                       placeholder="New Topic"/>
                                <i onClick={this.createTopic} className="btn fa fa-plus"></i>
                            </form>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

