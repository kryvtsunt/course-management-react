import React from 'react'
import TopicPills from '../child/TopicPills'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from '../../reducers/WidgetReducer'
import {Widgets} from "../../containers/child/WidgetList";

export default class TopicEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: 'undefined',
            moduleId: 'undefined',
            lessonId: 'undefined',
            topicId: 'undefined',
            widgetId: 'undefined'
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicId = this.setTopicId.bind(this);
        this.setWidgetId = this.setWidgetId.bind(this);

    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
        this.setTopicId(this.props.match.params.topicId);
        this.setWidgetId(this.props.match.params.widgetId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
        this.setTopicId(newProps.match.params.topicId);
        this.setWidgetId(newProps.match.params.widgetId);
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

    setWidgetId(widgetId) {
        this.setState({widgetId: widgetId});
    }


    render() {
        let store = createStore(widgetReducer);
        return (
            <div className="container-fluid">
                    <Provider store={store}>
                        <Widgets topicId={this.props.match.params.topicId}/>
                    </Provider>
            </div>
        );
    }
}