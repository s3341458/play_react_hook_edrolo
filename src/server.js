const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/courses', async (req, res) => {
  setTimeout(() => {
    res.json([
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
    ]);
  }, 500);
});

app.listen(port, () => console.log(`\nListening. Open localhost:${port}.`));
