React Todo List App

This is a simple Todo List application built using React and Vite.
It allows users to add tasks, mark tasks as completed, delete tasks, and automatically saves everything using localStorage.
The UI is clean, fast, and responsive.

Features:

Add new tasks

Mark tasks as completed

Delete tasks

Completed tasks are shown separately

Tasks persist using browser localStorage

Simple and clean interface

Built using Vite (fast build and dev server)


Tech Stack:

React

Vite

JavaScript (ES6)

CSS


Project Structure:

src/
  App.jsx
  main.jsx
  index.css
  TodoInput.jsx
  TodoList.jsx
  CompletedList.jsx
  assets/

index.html
package.json
vite.config.js

How to Run the Project Locally

1. Clone the repository

git clone https://github.com/Somasekhar2002/Todo-List.git


2. Navigate into the project folder

cd react-todo


3. Install the dependencies



npm install

4. Run the development server

npm run dev


5. Open the URL shown in the terminal (usually http://localhost:5173)

Build for Production

To generate the production build, run:

npm run build

A folder named dist will be created.
This folder contains the final optimized website files.

Deployment (Manual)

1. Run npm run build


2. Take the dist folder


3. Upload it to Netlify, Vercel, or any static hosting service



Live Demo
(https://todo-list-936c4e.netlify.app/)

License

This project is open-source and free to use.
