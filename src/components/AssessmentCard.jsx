import PropTypes from "prop-types";
import { getDateString, getDateValue } from "../utils/helpers";
import "../assets/css/CourseCard.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import Button from "./Button";
import { getTeacherCourses, updateAssessment } from "../service/courseService";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";

const AssessmentCard = ({ assessment }) => {
const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    assessmentId: assessment._id,
    courseId: assessment.course._id,
    assessmentTittle: assessment.assessmentTittle,
    startTime: getDateValue(assessment.startTime),
    endTime: getDateValue(assessment.endTime),
    maximumScore: assessment.maximumScore,
    duration: assessment.duration,
  });

  const { data: courses } = useQuery({
    queryKey: ["teacher-courses"],
    queryFn: () => getTeacherCourses(),
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const mutation = useMutation({
    mutationFn: () => {
      return updateAssessment(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teacher-assessments"]})
      toast("Update Successful", { type: "success" , autoClose: 1000});
      setIsEditing(false);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };
  return (
    <>
      <div className="assessment-card">
        <div className="edit-btn" onClick={() => setIsEditing(true)}>
          <FaEdit size={20} />
        </div>
        <center>
          <h1>{assessment.assessmentTittle}</h1>
        </center>
        <table>
          <tr>
            <td align="left">Course:</td>
            <td align="right">{assessment.course.courseTittle}</td>
          </tr>
          <tr>
            <td align="left">Start Date:</td>
            <td align="right">{getDateString(assessment.startTime)}</td>
          </tr>
          <tr>
            <td align="left">End Date:</td>
            <td align="right">{getDateString(assessment.endTime)}</td>
          </tr>
          <tr>
            <td align="left">Max Score:</td>
            <td align="right">{assessment.maximumScore}</td>
          </tr>
          <tr>
            <td align="left">Duration:</td>
            <td align="right">{assessment.duration} mins</td>
          </tr>
          <tr>
            <td align="left">Created On:</td>
            <td align="right">{getDateString(assessment.createAt)}</td>
          </tr>
          <tr>
            <td align="left">
              <Link
                to={`/dashboard/teacher/assessment/${assessment._id}/view-questions`}
              >
                <button>View Questions</button>
              </Link>
            </td>
            <td align="right">
              <Link
                to={`/dashboard/teacher/assessment/${assessment._id}/add-questions`}
              >
                <button>Add Questions</button>
              </Link>{" "}
            </td>
          </tr>
        </table>
      </div>
      <Modal
        hasCloseBtn={true}
        onClose={() => setIsEditing(false)}
        isOpen={isEditing}
      >
        <div className="grid-wrapper">
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="spacing-wrapper">
              <h1 className="my-3">
                <strong>Update Assessment</strong>
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

            <Button text="Update" loading={mutation.isPending} />
          </form>
        </div>
      </Modal>
    </>
  );
};

AssessmentCard.propTypes = {
  assessment: PropTypes.shape({
    _id: PropTypes.string,
    assessmentTittle: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    createAt: PropTypes.string,
    maximumScore: PropTypes.number,
    courseId: PropTypes.string,
    duration: PropTypes.number,
    course: PropTypes.shape({
      courseTittle: PropTypes.string,
      _id: PropTypes.string,
    }),
  }).isRequired
};

export default AssessmentCard;
