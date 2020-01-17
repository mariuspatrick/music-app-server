// HOW TO RUN:

1. After you've pulled from github:

   - inside your project folder

   - run npm install

   - check if all dependencies have been installed by running node index.js

   - optional: install missing dependencies

   - to remove everything from database:
     in db.js file, set force: true (don't forget to set back to false)

2. To run:

   - run node index.js

   or if you don't want to restart the server after every change

   -run npx nodemon

3. To deploy to heroku:

   - git push heroku master

     \*if working on a different branch:
     -git push heroku <yourbranch>:master

   - heroku open to run
