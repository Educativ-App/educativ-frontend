import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { parseAnswerInt, parseArrayAnswerInt } from "../../utils/helpers";
import Button from "../../components/Button";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { createQuestion } from "../../service/courseService";
import BackButton from "../../components/BackButton";
import { useStoreContext } from "../../Contexts/StoreContext";
import Modal from "../../components/Modal";
import GenerateQuestions from "../../components/GenerateQuestions";
import { RiRobot2Line } from "react-icons/ri";

const AddQuestions = () => {
  let { assessmentId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const {
    state: { assessmentTitle },
  } = useStoreContext();

  const [isGenerating, setIsGenerating] = useState(false);

  const navigate = useNavigate();

  const initialRow = {
    assessment: assessmentId,
    text: "How many bytes make one megabyte?",
    options: [1028, 1010, 1000, 8],
    correctAnswer: "1028",
    marks: 2,
  };

  const initialRows = [
    {
      assessment: assessmentId,
      text: "",
      options: [],
      correctAnswer: "",
      marks: 2,
    },
    // Add four more initial rows as needed
  ];

  const [rows, setRows] = useState(initialRows);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        assessment: assessmentId,
        text: "",
        options: [],
        correctAnswer: "",
        marks: 1,
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleDeleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    createQuestion(rows).then(() => {
      setIsLoading(false);
      toast("Questions Saved Successfully", {
        type: "success",
        autoClose: 1000,
      });
      navigate(`/dashboard/teacher/assessment/${assessmentId}/view-questions`);
    });
  };

  const saveQuestions = async (questions) => {
    questions = await questions.map((question) => ({
      ...question,
      assessment: assessmentId,
      marks: 2, // Adjust the marks value as needed
    }));

    // console.log(questions);
    setRows([...rows, ...questions]);
    setIsGenerating(false);
  };

  return (
    <>
      {" "}
      <div className="container">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BackButton />
          <Button
            icon={<RiRobot2Line size={20} />}
            text="A.I"
            onClick={() => setIsGenerating(true)}
          />
        </div>

        <div className="center">
          <h2>{assessmentTitle}</h2>
        </div>

        <form onSubmit={handleSubmit} className="assessment-form">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>No.</th>
                <th style={{ width: "30%" }}>Question</th>
                <th style={{ width: "30%" }}>Options</th>
                <th style={{ width: "20%" }}>Correct Answer</th>
                <th>Marks</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="assessment-row">
                <td>Demo:</td>
                <td>
                  <textarea disabled rows={1} value={initialRow.text} />
                </td>

                <td>
                  <textarea
                    disabled
                    rows={1}
                    value={initialRow.options.join(",")}
                  />
                </td>

                <td>
                  <input
                    disabled
                    type="text"
                    value={initialRow.correctAnswer}
                  />
                </td>

                <td>
                  <input type="number" disabled value={initialRow.marks} />
                </td>
                <td></td>
              </tr>
              {rows.map((row, index) => (
                <tr key={index} className="assessment-row">
                  <td>{index + 1}.</td>
                  <td>
                    <textarea
                      required
                      rows={3}
                      value={row.text}
                      onChange={(e) =>
                        handleInputChange(index, "text", e.target.value)
                      }
                    />
                  </td>

                  <td>
                    <textarea
                      required
                      rows={3}
                      value={row.options.join(",")}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "options",
                          parseArrayAnswerInt(e.target.value)
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      required
                      type="text"
                      value={row.correctAnswer}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "correctAnswer",
                          parseAnswerInt(e.target.value)
                        )
                      }
                    />
                  </td>

                  <td>
                    <input
                      required
                      type="number"
                      value={row.marks}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "marks",
                          parseAnswerInt(e.target.value)
                        )
                      }
                    />
                  </td>
                  <td>
                    <div
                      className="btn-del"
                      onClick={() => handleDeleteRow(index)}
                    >
                      <FaTrash />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex">
            <button type="button" onClick={handleAddRow}>
              Add Row
            </button>
            <Button loading={isLoading} text="Submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
      <Modal
        isOpen={isGenerating}
        onClose={() => setIsGenerating(false)}
        hasCloseBtn={true}
      >
        <GenerateQuestions saveQuestions={(e) => saveQuestions(e)} />
      </Modal>
    </>
  );
};

export default AddQuestions;
