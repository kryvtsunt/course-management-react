import React from 'react'
import {Link} from 'react-router-dom'


export default class TopicPill
    extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (

            <li className="nav-item ">
                <a className="nav-link bg-dark active"
                   href="#">
                    {this.props.topic.title}
                </a></li>

        )
            ;
    }
}
