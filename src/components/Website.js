import React from 'react';
import Header from './Header';
import CourseInfo from './CourseInfo'

const Website = ({ courses }) => {
  return (
    <div>
      <Header />
      <div>Hello and welcome to Edrolo's new website.</div>
      <div className="subjects">
        <h2>Subjects We Offer</h2>
          {courses.map(course => <CourseInfo key={course.id} {...course}/>)}
      </div>
      <div>
        <h2>Your Favorites</h2>
        <ul></ul>
      </div>
    </div>
  );
};

export default Website;
