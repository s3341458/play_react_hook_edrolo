import React, { useState } from 'react';
import Header from './Header';
import CourseInfo from './CourseInfo';

const Website = ({ courses }) => {
  const [favorites, setFavorites] = useState(new Set());
  const addToFavrite = course => () => {
    let newFavorites = new Set(favorites);
    newFavorites.add(course);
    setFavorites(newFavorites);
  };
  const deleteFavrite = course => () => {
    let newFavorites = new Set(favorites);
    newFavorites.delete(course);
    setFavorites(newFavorites);
  };
  return (
    <div>
      <Header />
      <div>Hello and welcome to Edrolo's new website.</div>
      <div className="subjects">
        <h2>Subjects We Offer</h2>
        {courses.map(course => (
          <CourseInfo
            key={course.id}
            clickTitle={addToFavrite(course)}
            {...course}
          />
        ))}
      </div>
      <div>
        <h2>Your Favorites</h2>
        <ul>
          {[...favorites].map(course => (
            <li key={`favorites-${course.id}`}>
              <p>
                {course.title}{' '}
                <button onClick={deleteFavrite(course)}>remove</button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Website;
