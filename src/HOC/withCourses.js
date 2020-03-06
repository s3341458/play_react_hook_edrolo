import React, { useEffect, useState } from 'react';
import axios from 'axios';

const withCourses = Component => (props) => {
  const [courses, updateCourses] = useState([]);
  useEffect(() => {
    axios.get('/api/courses').then(resp => updateCourses(resp.data));
  }, []);
  return <Component courses={courses} {...props} />;
};

export default withCourses;
