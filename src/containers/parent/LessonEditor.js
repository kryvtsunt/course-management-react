import React from 'react'
import TopicPills from '../child/TopicPills'
import {Route} from 'react-router-dom'
import TopicEditor from "./TopicEditor";

export default class LessonEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: 'undefined',
            moduleId: 'undefined',
            lessonId: 'undefined',
            topicId: 'undefined'
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicId = this.setTopicId.bind(this);

    }

    componentWillMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
        this.setTopicId(this.props.match.params.topicId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
        this.setTopicId(newProps.match.params.topicId);
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

    setTopicId(topicId) {
        this.setState({topicId: topicId});
    }


    render() {
        return (
                <div className="container-fluid">
                    {/*Uncoment line below to access topic pills*/}
                    <TopicPills courseId={this.state.courseId} moduleId={this.state.moduleId} lessonId={this.state.lessonId} topicId={this.state.topicId}/>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget" component={TopicEditor}/>
                </div>
        );
    }
}
