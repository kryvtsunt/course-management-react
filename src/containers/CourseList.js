import React from 'react';
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseSerice'

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        //this.state = {courses: []};
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
                console.log(courses);
            });
    }

    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId);
    }

    courseRows() {
        var rows = this.state.courses.map((course) => {
            return <CourseRow course={course} key={course.id}
                              delete={this.deleteCourse}/>
        });
    }


    renderCourseRows() {
        let courses = null;
        if (this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id} course={course}/>
                }
            )
        }
        return (courses)
    }

    titleChanged(event) {
        this.setState({
            course: {title: event.target.value}
        });

    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    <tr>
                        <th>
                            <input onChange={this.titleChanged}
                                   className="form-control"
                                   id="titleFld"
                                   placeholder="CS101"/>
                        </th>
                        <th>
                            <button onClick={this.createCourse}
                                    className="btn btn-primary">
                                Add
                            </button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseList;