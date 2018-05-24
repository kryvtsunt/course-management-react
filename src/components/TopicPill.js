import React from 'react'



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
                    </a>
                    {/*<span className="float-right">*/}
                    {/*<i className="btn fa fa-times" onClick={() => {*/}
                        {/*this.props.delete(this.props.courseId, this.props.moduleId, this.props.lesson.id)*/}
                    {/*}}>*/}
                    {/*</i>*/}
                {/*</span>*/}
            </li>

        )
            ;
    }
}
