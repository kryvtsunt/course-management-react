import React from 'react'
import TopicPills from './TopicPills'


export default class LessonTabs
    extends React.Component {
    render() {
        return (
            <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a class="nav-link active"
                                            href="#">Active Tab</a></li>
                    <li class="nav-item"><a class="nav-link"
                                            href="#">Another Tab</a></li>
                </ul>
                <br/>
                <TopicPills/>
            </div>

        );
    }
}
