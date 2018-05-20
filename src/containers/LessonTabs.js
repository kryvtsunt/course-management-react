import React from 'react'
import TopicPills from './TopicPills'


export default class LessonTabs
    extends React.Component {
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
            </div>

        );
    }
}
