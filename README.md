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

==================================================
BUGS
==================================================
1. Password is too weak
2. Some fields like Employee ID and Other ID allow special characters
3. There is need to add attributes like id or name to some fields like Employee ID and Other ID to allow smooth automation
4. A user is able to save the same information multiple times. 

==================================================
PERFORMANCE TESTING
===================================================
1. Identify the tool for example JMeter
2. Have a list of APIs to be tested and the test data needed for example:
- /auth/login {credentials}
- /auth/requestPasswordResetCode {email/username}
- /dashboard/index {authorization token}
- /directory/viewDirectory {authorization token}
- /admin/viewSystemUsers {authorization token}
- /leave/viewLeaveList {authorization token}
4. Prepare the test plan and scripts after obtaining the following information/acceptance criteria:
- Expected no of users per second/throughput
- Expected response times
- Expected load/traffic on different hours
5. Come up with all possible use cases based on 4 above
6. Configure the test environment - web app and the DB for example opensource-demo.orangehrmlive.com
7. Execute the scripts and monitor resources utilization
8. Review the test results. Fine tune the tests and the resources and run the tests again
9. Keep sharing feedback after the tests run 
10. When the desired results are achieved, exit the performance testing exercise and monitor the application after deployment.

