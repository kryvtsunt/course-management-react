import React from 'react';
import CourseRow from '../../components/CourseRow'
import CourseService from '../../services/CourseSerice'
import CourseCard from '../../components/CourseCard'

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            newCourse: {title: ''},
            courses: [],
            table: true,
            public: true
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.renderCourseRows = this.renderCourseRows.bind(this);
        this.renderCourseCards = this.renderCourseCards.bind(this);
        this.modeChanged = this.modeChanged.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
    }

    componentDidMount() {
        this.findAllCourses();
    }

    componentWillReceiveProps() {
        // this.findAllCourses();
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    titleChanged(event) {
        this.setState({
            newCourse: {title: event.target.value}
        });

    }

    toggleStatus(){
        this.setState({public: !this.state.public});
    }

    modeChanged() {
        this.setState({
            table: !this.state.table
        });

    }

    createCourse() {
        let addCourse = {title: 'New Course'};
        if (this.state.newCourse.title !== '') {
            addCourse = this.state.newCourse;
        }
        if (this.state.public){
            addCourse.status = "public";
        } else {
            addCourse.status = "private";
        }
        console.log(addCourse.status);
        this.courseService
            .createCourse(addCourse)
            .then(() => {
                this.findAllCourses();
            });
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => {
                this.findAllCourses();
            });
    }


    renderCourseRows() {
        let courses = null;
        let deleteCourse = this.deleteCourse;
        if (this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id} course={course} delete={deleteCourse}/>
                });
        }
        return (courses);
    }

    renderCourseCards() {
        let courses = null;
        let deleteCourse = this.deleteCourse;
        if (this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseCard key={course.id} course={course} delete={deleteCourse}/>
                });
        }
        return (courses);
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#202020'}}>
                        <div className="nav-item container-fluid">
                            <button
                                className={(this.state.table) ? "btn btn-dark fa fa-2x fa-table" : "btn btn-dark fa fa-2x fa-th"}
                                onClick={this.modeChanged}></button>
                            <span className="navbar-brand nav-item container-fluid">
                            <h2>All Courses</h2>
                            </span>
                        </div>
                        <span className="input-group">
                                <input onChange={this.titleChanged}
                                       className="form-control"
                                       id="titleFld"
                                       placeholder="New Course"/>
                                <i onClick={this.toggleStatus}
                                   className={(this.state.public) ? "btn btn-dark fa fa-2x fa-users" : "btn btn-dark fa fa-2x fa-user"}>
                                </i>
                                <i onClick={this.createCourse}
                                   className="btn btn-outline-dark fa fa-2x fa-plus">
                                </i>
                        </span>
                    </nav>
                </div>
                <div className="container-fluid" hidden={!this.state.table}>
                    <table className="table table-dark ">
                        <thead className="bg-dark">
                        <tr>

                        </tr>
                        <tr>
                            <th className="text-center">Title</th>
                            <th className="text-center">Owned by</th>
                            <th className="text-center">Created</th>
                            <th className="text-center">Last modified</th>
                            <th className="text-center">Action</th>
                        </tr>

                        </thead>
                        <tbody>
                        {this.renderCourseRows()}
                        </tbody>
                    </table>
                </div>
                <div className="card-deck container-fluid" hidden={this.state.table}>
                    {this.renderCourseCards()}
                </div>
            </div>
        )
    }
}

export default CourseList;