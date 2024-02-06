import { useState } from "react";
import Button from "../../components/Button";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import {
  createAssessment,
  getTeacherCourses,
} from "../../service/courseService";
import { getCurrentDate } from "../../utils/helpers";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();

  const { data: courses } = useQuery({
    queryKey: ["teacher-courses"],
    queryFn: () => getTeacherCourses(),
  });

  const [formData, setFormData] = useState({
    courseId: "",
    assessmentTittle: "",
    startTime: getCurrentDate(),
    endTime: getCurrentDate(),
    maximumScore: 100,
    duration: 60,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.courseId == "") {
      toast("Select a course", { type: "error", autoClose: 1000 });
      return;
    }

    const res = createAssessment(formData);

    if (res) {
      navigate("/dashboard/teacher/assessment");
    }
  };
  return (
    <div>
      <div className="spacing-wrapper mb-2">
        <Button
          text="Back"
          className={"m-2"}
          onClick={() => {
            navigate(-1);
          }}
          icon={<MdArrowBackIosNew />}
        />
      </div>
      <div className="grid-wrapper">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="spacing-wrapper">
            <h1 className="my-3">
              <strong>Create New Assessment</strong>
            </h1>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="courseId">Course ID:</label>
              <select
                id="courseId"
                name="courseId"
                value={formData.courseId}
                onChange={handleChange}
              >
                <option value="">Select a course</option>
                {courses ? (
                  courses.map((course, i) => (
                    <option key={i} value={course.course._id}>
                      {`${course.course.courseTittle} (${course.course.courseCode})`}
                    </option>
                  ))
                ) : (
                  <option value="">Select a course</option>
                )}
                {/* Add your course options dynamically based on your data */}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="assessmentTittle">Assessment Title:</label>
              <input
                type="text"
                id="assessmentTittle"
                name="assessmentTittle"
                value={formData.assessmentTittle}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="startTime">Start Time:</label>
              <input
                type="date"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="endTime">End Time:</label>
              <input
                type="date"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="maximumScore">Maximum Score:</label>
              <input
                type="number"
                id="maximumScore"
                name="maximumScore"
                max={100}
                min={1}
                value={formData.maximumScore}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="duration">Duration (minutes):</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Create;
