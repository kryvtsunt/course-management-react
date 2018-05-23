import React from 'react';
import CourseRow from '../../components/CourseRow'
import CourseService from '../../services/CourseSerice'

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            newCourse: {title: ''},
            courses: []
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentDidMount() {
        this.findAllCourses();
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

    createCourse() {
        this.courseService
            .createCourse(this.state.newCourse)
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


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <span className="navbar-brand">
                        <h2>Course List</h2>
                        </span>
                    </nav>
                </div>
                <div className="container-fluid">
                    <table className="table table-dark ">
                        <thead>
                        <tr>
                            <th>
                                <input onChange={this.titleChanged}
                                       className="form-control"
                                       id="titleFld"
                                       placeholder="CS101"/>
                            </th>
                            <th>
                                <i onClick={this.createCourse}
                                   className="btn btn-outline-dark fa fa-plus">
                                </i>
                            </th>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <th>Owned by</th>
                            <th>Created</th>
                            <th>Last modified</th>
                        </tr>

                        </thead>
                        <tbody>
                        {this.renderCourseRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CourseList;