1. Git clone this project
2. Install Cypress using the command below. 
"npm install cypress --save-dev"
NB: you need to have npm installed on your machine. You can read more info here https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
or here: https://nodejs.org/en/download
3. The tests are added under cypress/e2e/tests.
4. To run these tests from the command line you can execute the commands:
"npm run" or by specifying the path "./node_modules/.bin/cypress run"
5. To run these tests from the test runner you can execute the commands:
"npm run open" or by specifying the path "./node_modules/.bin/cypress open"

=================================================
TEST STRUCTURE
=================================================
1. The strings folder has an english js file. I added it to store long texts that are used on the app. The tests read from this file when needed. This english file is relatively easy to maintain when descriptions change on the app.
2. The pom folder has another folder called web. Inside this folder I typically maintain routine methods for example I organize all buttons under one file that I would call button.js, organize generic inputs in a file I would call inputs.js and other methods in a file I would call utils.js.
NB: This can be achieved from the folder called support that comes with Cypress it is only a matter of preference.
3. Under fixtures folder I maintain the test data. I can read and write from and to the files under fixtures folder.
4. Cypress config file: I can add preffered configurations to override the default Cypress settings
5. I added a .gitignore file for the files that I do not need to maintain as part of the tests
