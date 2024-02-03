import Button from "./Button";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="spacing-wrapper mb-2 ">
      <Button
        text="Back"
        className={"m-2"}
        onClick={() => {
          navigate(-1);
        }}
        icon={<MdArrowBackIosNew />}
      />
    </div>
  );
};

export default BackButton;
