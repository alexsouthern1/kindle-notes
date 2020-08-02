import React from "react";
import { connect } from "react-redux";
import { createCourse } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };
  handleChange = (event) => {
    const course = {
      ...this.state.course,
      title: event.target.value,
    };
    this.setState({ course: course }); //binding in the constructor
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("course is", this.state.course);
    // this.props.dispatch(createCourse(this.state.course))
    this.props.createCourse(this.state.course);
    alert(this.state.course.title);
  };

  render() {
    // console.log('props are ', this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.courses.map((course) => (
          <div key={course.title}>"{course.title}"</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // be specific with what state.
  // The component will rerender whenever this state changes, so specificity improves performance.
  courses: state.courses,
});

// const mapDispatchToProps = (dispatch) => ({
//   // createCourse: (course) => dispatch(createCourse(course)),
//   createCourse: bindActionCreators(createCourse, dispatch)  
// });

// Setting mapDispatchToProps as an object instead
const mapDispatchToProps = {
  createCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
