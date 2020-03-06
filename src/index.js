import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from '@hot-loader/react-dom';
import Website from './components/Website';

export const courses = [
  {
    id: 'maths-methods',
    title: 'Maths Methods',
    infoUrl: '/course/maths-methods',
    presenter: 'Daniel Carr',
    caption: 'The Maths Methods course is proven!',
  },
  {
    id: 'physics',
    title: 'Physics',
    infoUrl: '/course/physics',
    presenter: 'Kai Hirsinger',
    caption: 'The Physics course will move you!',
  },
  {
    id: 'english',
    title: 'English',
    infoUrl: '/course/english',
    presenter: 'Matt Fisher',
    caption: 'The English course is literary amazing!',
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    infoUrl: '/course/chemistry',
    presenter: 'Danny Shaw',
    caption: 'The Chemistry course is beyond elementary!',
  },
  {
    id: 'geography',
    title: 'Geography',
    infoUrl: '/course/geography',
    presenter: 'Nathan McGinness',
    caption: 'The Geography course is globally recognized!',
  },
];
const HotWrapped = hot(() => <Website courses={courses}/>);

const mount = document.getElementById('lug');
ReactDOM.render(<HotWrapped />, mount);
