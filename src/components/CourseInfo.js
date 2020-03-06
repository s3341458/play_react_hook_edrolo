import React from 'react';

const CourseInfo = ({ title, caption, infoUrl }) => (
  <div className="courseInfo">
    <h3 className="courseTitle">{title}</h3>
    <p>
      {caption}
      <a href="{infoUrl}">read more...</a>
    </p>
  </div>
);

export default CourseInfo;
