import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTeacherCourses } from "../service/courseService";
import Button from "./Button";
import { createUser } from "../service/userService";

const CreateUser = ({ role, setIsCreating }) => {
  var initialState = {
    email: "",
    password: "",
    role: role,
    courseId: role === "student" ? "" : undefined,
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
  };
  const [formData, setFormData] = useState(initialState);

  const { data: courses } = useQuery({
    queryKey: ["teacher-courses"],
    queryFn: () => getTeacherCourses(),
  });

  const queryClient = useQueryClient();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const mutation = useMutation({
    mutationFn: () => {
       createUser(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students", "teachers"] });
      setIsCreating(false);
      setFormData(initialState);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="grid-wrapper">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <center>
              <h1>Create {role}</h1>
            </center>
          </div>
          <div className="col-md-12 ">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 ">
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 ">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 ">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 ">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 ">
            <label>Gender</label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="col-md-6 ">
            <label>Date of Birth</label>
            <input
              type="date"
              required
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          {role === "student" && (
            <div className="col-md-6 ">
              <label>Course</label>
              <select
                name="courseId"
                required
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                {courses &&
                  courses.map((course) => (
                    <option key={course.course._id} value={course.course._id}>
                      {course.course.courseTittle} ({course.course.courseCode})
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>

        <Button loading={mutation.isPending} text={`Save`} />
      </form>
    </div>
  );
};

CreateUser.propTypes = {
  role: PropTypes.oneOf(["student", "teacher"]),
  setIsCreating: PropTypes.func,
};

export default CreateUser;
