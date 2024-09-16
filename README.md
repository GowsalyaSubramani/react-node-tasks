# React & Node.js Tasks Project

This project contains a series of React components and Node.js/Express-based tasks to demonstrate skills in front-end and back-end development.

## Table of Contents

- [Installation](#installation)
  - [Clone the Repository](#clone-the-repository)
  - [Running React Tasks](#running-react-tasks)
  - [Running Node.js Tasks](#running-nodejs-tasks)
- [Notes](#notes)

## Installation

### Clone the Repository

To get started, clone the repository to your local machine using the following command:

```
git clone https://github.com/GowsalyaSubramani/react-node-tasks.git
```
Once cloned, you will have two main folders: one for React tasks and one for Node.js tasks.

Running React Tasks
1.Navigate into the React tasks folder:
```
cd react-tasks
```

2.Create a new React task project using Vite (for each task):
```
npm create vite@latest Task_number
```
```
cd Task_number
```

3.Install necessary dependencies:
```
npm install
```

4.Run the project:
```
npm run dev
```

View the output:
The app will be available at http://localhost:5173 (or the port number mentioned in your terminal).

Note: Repeat the steps above for each React task, ensuring all dependencies shown in the terminal are installed.

Running Node.js Tasks
1.Navigate into the Node tasks folder:
```
cd node-tasks
```

2.Initialize a Node.js project (if not already done):
```
npm init -y
```

3.Install Express (if required for the task):
```
npm install express
```

4.Run the application:
Depending on the filename in each task, run the appropriate command (for example app.js, index.js, or server.js):

node app.js
Or, if you're using nodemon for automatic restarting:

nodemon app.js

5.View the output:
The server will be running on the port number specified in the code (typically 3000 or 5000).
For example, open your browser and navigate to:

http://localhost:3000
Note: Ensure that all necessary dependencies are installed to avoid errors during runtime.

Notes
React Tasks: Follow the steps for creating and running each task individually. Each task may have specific requirements and additional dependencies.
Node.js Tasks: The filename to run may differ for each task (app.js, index.js, or server.js), so ensure you're running the correct file. Refer to the task-specific instructions if needed.
Dependencies: Always install the required dependencies as prompted in the terminal to avoid errors.
