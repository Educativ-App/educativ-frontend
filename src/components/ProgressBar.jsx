import { Circle } from "rc-progress";

import "../assets/css/ProgressBar.css";

const ProgressBar = ({ percentage, type }) => {
  const colour = percentage < 39 ? "#ff0000" : "#8ce200";
  return (
    <div className="progress_bar">
      <Circle
        percent={percentage}
        strokeWidth={8}
        strokeColor={colour}
        trailWidth={8}
        trailColor="#ededed"
      />
      <div className="percentage_container">
        <h4 style={{ color: colour }}>{percentage}%</h4>
        {type && <h6>{type}</h6>}
      </div>
    </div>
  );
};

export default ProgressBar;
