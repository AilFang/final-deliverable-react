import { Link } from "react-router-dom";
function Back() {
  return (
    <>
      <Link to="/map">
        <div className="back">
          <u>
            <h2>←go back</h2>
          </u>
        </div>
      </Link>
    </>
  );
}

export default Back;
