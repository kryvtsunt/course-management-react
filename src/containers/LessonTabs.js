import React from 'react'
import TopicPills from './TopicPills'


export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container-fluid">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active"
                                                href="#">Active Tab</a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#">Another Tab</a></li>
                </ul>
                <br/>
                <TopicPills/>
                <h4>This is module {this.props.moduleId}</h4>
            </div>

        );
    }
}
