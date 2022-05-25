import React from "react";
import "./SingleBlog.css";

function SingleBlog() {
  return (
    <div className="blog-card">
      <div className="single-blog-detail">
        <h1 className='headingBlog' style={{ marginBottom: "-20px" }}>נושא</h1>
        <p>לורם איפסום </p>
      </div>

      <div className="singleB-detail">
        <h1 className='headingBlog' >תוכן</h1>
        <p>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק סכעיט
          דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול.
        </p>
      </div>

      <div className="buttonsB-div">
        <button className="delB-btn">מחק</button>
        <button className="editB-btn">עדכן</button>
      </div>
    </div>
  );
}

export default SingleBlog;
