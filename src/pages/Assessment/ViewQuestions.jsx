import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  getQuestionsByAssessment,
  updateQuestion,
} from "../../service/courseService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import "../../assets/css/CourseCard.css";
import BackButton from "../../components/BackButton";
import Modal from "../../components/Modal";
import { parseAnswerInt, parseArrayAnswerInt } from "../../utils/helpers";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { MdNoteAdd } from "react-icons/md";
import { useStoreContext } from "../../Contexts/StoreContext";

const ViewQuestions = () => {
  const { assessmentId } = useParams();
  const navigate = useNavigate();

  const {
    state: { assessmentTitle },
    dispatch,
  } = useStoreContext();

  const {
    data: questions,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["assessment-questions"],
    queryFn: () => getQuestionsByAssessment(assessmentId),
  });

  const [editedQuestion, setEditedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleInputChange = (field, value) => {
    setEditedQuestion({ ...editedQuestion, [field]: value });
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleEdit = (question) => {
    setEditedQuestion({ ...question, questionId: question._id });
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    // Handle delete logic here
    // setQuestions(questions.filter(question => question.id !== id));
  };

  const saveEditQuestion = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    await updateQuestion(editedQuestion);
    toast("Update Successful", { type: "success", autoClose: 1000 });
    refetch();
    setIsUpdating(false);
    setIsModalOpen(false);
  };
  const navigationHandler = (link, title) => {
    dispatch({
      type: "ASSESSMENT_TITLE",
      payload: title,
    });
    navigate(link);
  };

  return (
    <div className="container">
      <div className="d-flex">
        <BackButton />
        <button
          className="btn btn-outline"
          onClick={() =>
            navigationHandler(
              `/dashboard/teacher/assessment/${assessmentId}/add-questions`,
              assessmentTitle
            )
          }
        >
          Add
          <MdNoteAdd size={20} />
        </button>
      </div>

      <div className="center">
        <h2>{assessmentTitle}</h2>
      </div>
      <div className="assessment-table-container">
        <table className="assessment-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Options</th>
              <th>Correct Answer</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {questions &&
              questions.map((question, i) => (
                <tr key={question._id}>
                  <td>{i + 1}.</td>
                  <td>{question.text}</td>
                  <td>{question.options.join(", ")}</td>
                  <td>{question.correctAnswer}</td>
                  <td>{question.marks}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(question)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(question.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {editedQuestion && (
        <Modal
          hasCloseBtn={true}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <h2>Edit Question</h2>
          <div className="grid-wrapper">
            <form onSubmit={saveEditQuestion} className="form-wrapper">
              <div className="row">
                <div className="col-12">
                  <label>Question</label>
                  <textarea
                    required
                    rows={3}
                    value={editedQuestion.text}
                    onChange={(e) => handleInputChange("text", e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label>Options</label>
                  <textarea
                    required
                    rows={3}
                    value={editedQuestion.options.join(",")}
                    onChange={(e) =>
                      handleInputChange(
                        "options",
                        parseArrayAnswerInt(e.target.value)
                      )
                    }
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="">Correct Answer</label>
                  <input
                    required
                    type="text"
                    value={editedQuestion.correctAnswer}
                    onChange={(e) =>
                      handleInputChange(
                        "correctAnswer",
                        parseAnswerInt(e.target.value)
                      )
                    }
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="">Marks</label>
                  <input
                    required
                    type="number"
                    value={editedQuestion.marks}
                    onChange={(e) =>
                      handleInputChange("marks", parseAnswerInt(e.target.value))
                    }
                  />
                </div>
              </div>
              <Button text="Update" loading={isUpdating} />
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ViewQuestions;
