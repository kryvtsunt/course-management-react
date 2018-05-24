import React from 'react';
import {Link} from 'react-router-dom'
import Modal from 'react-modal'


Modal.setAppElement('body')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    openModal() {
        this.setState({modalIsOpen: true});
    }


    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <li className="list-group-item bg-dark">
                <div className="btn-group btn-block">
                    <Link
                        className={(this.props.active === this.props.module.id) ? 'text-white btn btn-block btn-dark active' : 'text-white btn btn-block btn-dark'}
                        onClick={() => {
                            this.props.setActive(this.props.module.id)
                        }}

                        to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                        {this.props.module.title}
                    </Link>
                    <span className="float-right">
                        <i className="btn fa fa-2x fa-times" onClick={() => {(this.props.active !== this.props.module.id)
                            ?
                            this.openModal()
                            //this.props.delete(this.props.courseId, this.props.module.id)
                            : null}}>
                        </i>
                    </span>
                    <div>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal">
                            <h2 ref={subtitle => this.subtitle = subtitle}>Are you sure you want to delete this
                                module?</h2>
                            <br/>
                            <form>
                                <button className="btn btn-success btn-block" onClick={() => {
                                    this.props.delete(this.props.courseId, this.props.module.id)
                                }}>yes</button>
                                <button className="btn btn-danger btn-block" onClick={this.closeModal}>no</button>
                            </form>
                        </Modal>
                    </div>
                </div>

            </li>
        );
    }
}
