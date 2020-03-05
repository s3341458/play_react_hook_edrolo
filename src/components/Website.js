import React from 'react';
import Header from './Header';

const Website = () => {
  return (
    <div>
      <Header />
      <div>Hello and welcome to Edrolo's new website.</div>
      <div className="subjects">
        <h2>Subjects We Offer</h2>

        <div className="courseInfo">
          <h3 className="courseTitle">Maths Methods</h3>
          <p>
            The Maths Methods course is proven!
            <a href="/course/maths-methods">read more...</a>
          </p>
        </div>

        <div className="courseInfo">
          <h3 className="courseTitle">Physics</h3>
          <p>
            The Physics course will move you!
            <a href="/course/physics">read more...</a>
          </p>
        </div>

        <div className="courseInfo">
          <h3 className="courseTitle">English</h3>
          <p>
            The English course is literally amazing!
            <a href="/course/english">read more...</a>
          </p>
        </div>

        <div className="courseInfo">
          <h3 className="courseTitle">Chemistry</h3>
          <p>
            The Chemistry course is beyond elementary!
            <a href="/course/chemistry">read more...</a>
          </p>
        </div>

        <div className="courseInfo">
          <h3 className="courseTitle">Geography</h3>
          <p>
            The Geography course is globally recognized!
            <a href="/course/geography">read more...</a>
          </p>
        </div>
      </div>
      <div>
        <h2>Your Favorites</h2>
        <ul></ul>
      </div>
    </div>
  );
};

export default Website;
