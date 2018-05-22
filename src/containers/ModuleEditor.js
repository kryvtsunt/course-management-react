import React from 'react'
import TopicPills from './TopicPills'
import LessonTabs from './LessonTabs'


export default class ModuleManager
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <LessonTabs courseId={this.props.match.params.courseId} moduleId={this.props.match.params.moduleId}/>
                {/*<TopicPills/>*/}
                <h4>This is module {this.props.match.params.moduleId}</h4>
            </div>

        );
    }
}
