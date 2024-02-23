import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQuery } from "@tanstack/react-query";
import Button from "./Button";
import { getAllTeachers } from "../service/userService";
import { assignTeacher } from "../service/courseService";

const AssignTeacherCourse = ({ courseId, courseName, setIsAssigning }) => {
  var initialState = {
    courseId: courseId,
    teacherId: "",
  };

  const [formData, setFormData] = useState(initialState);

  const { data: teachers } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => getAllTeachers(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const mutation = useMutation({
    mutationFn: async () => await assignTeacher(formData),
    onSuccess: async () => {
      setIsAssigning(false);
      setFormData(initialState);
    },
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
              <h1>Assign Course</h1>
            </center>
          </div>

          {/* <div className="col-12 ">
            <label>Course ID</label>
            <input
              type="text"
              name="courseId"
              readOnly
              value={formData.courseId}
              onChange={handleChange}
            />
          </div> */}
          <div className="col-12 ">
            <label>Course Title</label>
            <input type="text" name="courseName" disabled value={courseName} />
          </div>

          <div className="col-12 ">
            <label>Teacher</label>
            <select
              name="teacherId"
              required
              value={formData?.teacherId}
              onChange={handleChange}
            >
              <option value="">Select Teacher</option>
              {teachers &&
                teachers.map((teacher) => (
                  <option key={teacher?._id} value={teacher?._id}>
                    {`${teacher?.firstName} ${teacher?.middleName} ${teacher?.lastName}`}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <Button loading={mutation.isPending} text={`Save`} />
      </form>
    </div>
  );
};

AssignTeacherCourse.propTypes = {
  courseId: PropTypes.string,
  setIsAssigning: PropTypes.func,
  courseName: PropTypes.string,
};

export default AssignTeacherCourse;
