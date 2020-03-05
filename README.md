# Edrolo Coding Challenge - React

Please read this document in full before starting.

This challenge provides a way for you to demonstrate to us a little of what you can do. Your response will not be used for a full assesment of your capabilities, it's just a simple standardized approach we take to qualify the skills we're hiring for. This challenge should be taken quite lightly and not require too much of your time or energy. Spend two hours maximum and see what you can do.

In this repo is the contrived beginnings of a new website coded up by someone who's not too familiar with React.
We'd like you to make a few iterative changes to the code.

### Prerequisites:

- Assumes `nodejs >= 10.18.1`, `yarn` and `git` are installed, talk to us if you need assistance here.

## Instructions

- After unzipping the repository, create a new branch `git checkout -b <name>`
- Run `yarn install` within the `react` folder to install dependencies.
- Running `yarn run serve` will give you a working environment with hot-reloading enabled.
- Attempt the tasks below, commit each task to git (or more often).
- When ready, create a patch file for submission by running the following command:

```
git format-patch master --stdout > submission.patch
```

- Submit `submission.patch`.

Notes:

- Please do the tasks in order
- Incomplete entries are welcome.
- If you want to comment your code to share your thoughts, or add a text file with any notes, feel free. (Not mandatory).
- If you want to use external libaries for any reason you may, but please indicate your reasoning.
- If there are any issues with the general setup of this challenge as presented, please do get in touch, we don't want you to debug our mistakes!

## Tasks

### 1. New Component

- `Website.js` is in the process of being converted from a static html file into a more component oriented structure.
- In `Website.js` there is a list of courses.
- We'd like you to create a new React component `<CourseInfo />` to use for each course in the list to make the Website file cleaner and reduce some duplication.
- Implement this new component and convert the existing `Website.js` to utilise it.

### 2. API Integration

- An API has been created that we'd like to integrate, it is available at `/api/courses`.
- The endpoint will provide a list of subjects we are offering this year.
- Replace the hardcoded list of subjects on the website with the list retrieved from the API.
- Store the response from the API in some form of state.
- For this exercise, don't worry about what to display during loading states.
- The response from the API will look like this:

```javascript
[
  {
    id: 'english',
    title: 'English',
    infoUrl: '/course/english',
    presenter: 'Matt Fisher',
    caption: 'The English course is literary amazing!',
  },
  ...,
];
```

### 3. Manipulating State

- We'd like to allow users to select the courses they like.
- Implement application state that allows users to click the title of the courses they like.
- Display the `title` of the liked courses in the "Your Favourites" list at the bottom of the `<Website />` component.
- Include a button next to each title to allow removing from the list.

### 4. (Optional) Freedom

- This step is completely optional (seriously, we don't want to demand too much of your time)
- What would you choose to do to improve the code in any way you see fit?
- You could simply make notes in a text file here, or implement if you wish.
