// HOW TO RUN:

1. After you've pulled from github:

   -run npm install
   -check if all dependencies have been installed

   - optional: install missing dependencies

   - to remove everything from database:
     in db.js file set force: true (don't forget to set back to false)

2. To run:

   - run node index.js

   or if you don't want to restart everytime

   -run npx nodemon

3. To deploy to heroku:

   - git push heroku master
   - heroku open
