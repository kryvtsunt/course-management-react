import React from 'react'
import TopicPills from './TopicPills'
import LessonTabs from './LessonTabs'


export default class ModuleManager
    extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container-fluid">
                <LessonTabs/>
                <br/>
                <TopicPills/>
                <h4>This is module {this.props.match.params.moduleId}</h4>
            </div>

        );
    }
}
