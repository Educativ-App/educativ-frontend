import { useNavigate, useParams } from "react-router-dom";
import { useStoreContext } from "../../Contexts/StoreContext";
import { useQuery } from "@tanstack/react-query";
import { getResultsByAssessment } from "../../service/studentService";
import Loading from "../../components/Loading";
import BackButton from "../../components/BackButton";
import { useAuth } from "../../Contexts/AuthContext";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import ResultCard from "../../components/ResultCard";

const ShowResult = () => {
  const { assessmentId } = useParams();
  const navigate = useNavigate();
  const { authUser: user } = useAuth();

  const {
    state: { assessmentTitle },
    dispatch,
  } = useStoreContext();

  const sortByTotalScore = (data) => {
    const sorted = data.sort((a, b) => b.totalScore - a.totalScore);
    return sorted;
  };

  const { data: results, isLoading } = useQuery({
    queryKey: ["results", assessmentId],
    queryFn: () => getResultsByAssessment(assessmentId),
    select: (results) => sortByTotalScore(results),
  });

  const navigationHandler = (link, title) => {
    dispatch({
      type: "ASSESSMENT_TITLE",
      payload: title,
    });
    navigate(link);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <BackButton />
          {user?.role === "teacher" && (
            <button
              className="btn btn-outline"
              onClick={() =>
                navigationHandler(
                  `/dashboard/teacher/assessment/${assessmentId}/view-questions`,
                  assessmentTitle
                )
              }
            >
              View
              <HiDocumentMagnifyingGlass size={20} />
            </button>
          )}
        </div>

        <div className="center">
          <h2>{assessmentTitle} Results</h2>
        </div>

        <div className="grid-wrapper">
          <div className="row">
            {results &&
              results?.map((result, index) => (
                <div key={index} className="col-md-4 gy-2 my-2">
                  <ResultCard result={result} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowResult;
