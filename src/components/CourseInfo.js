import React from 'react';

const CourseInfo = ({ title, caption, infoUrl, clickTitle }) => (
  <div className="courseInfo">
    <h3 className="courseTitle" onClick={clickTitle}>{title}</h3>
    <p>
      {caption}
      <a href="{infoUrl}">read more...</a>
    </p>
  </div>
);

export default CourseInfo;
