import React from 'react'

export default class TopicPills
    extends React.Component {
    render() {
        return (
            <ul className="nav nav-pills navbar-dark">
                <li className="nav-item">
                    <a className="nav-link bg-dark active"
                       href="#">Topic 1</a></li>
                <li className="nav-item"><a className="nav-link"
                                        href="#">Topic 2</a></li>
            </ul>);
    }
}