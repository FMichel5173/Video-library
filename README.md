Concept
This app aims to manage a video library so you always know who you have lent DVDs or other to.

Setup & Use
Clone this repo, enter it
Run command npm run setup
NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in backend/.env.sample

Available Commands
setup : Initialization of frontend and backend, as well as all toolings
migrate : Runs the database migration script
dev : Starts both servers (frontend + backend) in one terminal
dev-front : Starts the React frontend server
dev-back : Starts the Express backend server
lint : Runs validation tools, and refuses unclean code (will be executed on every commit)
fix : Fixes linter errors (run it if lint growls on your code !)

FAQ
Tools
Concurrently : Allows for several commands to run concurrently in the same CLI
Husky : Allows to execute specific commands that trigger on git events
Vite : Alternative to Create-React-App, packaging less tools for a more fluid experience
ESLint : Code quality tool, ensures chosen rules will be enforced
Prettier : Code quality tool as well, focuses on the styleguide
Airbnb Standard : One of the most known "standards", even though it's not officially linked to ES/JS
Nodemon : Allows to restart the server every time a .js file is updated
Mysql2
Axios
react-icons
