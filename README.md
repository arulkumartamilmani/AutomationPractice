# AutomationPractice
Automation Practice with Gherkin Tests
----------------
TEST FRAMEWORK
----------------

The following are the directory levels & Files

CypressTest/fixtures/		      						            -**Configure application and environment using json files**<br />		
CypressTest/plugins/								    	            -**Plugin configuration**<br /> 
CypressTest/support/				        			            -**Environment configuration**<br /> 
CypressTest/screenshots/							  	            -**Screenshots of pages failed during execution**<br /> 						
CypressTest/video/										                -**Video of Automated Test execution**<br /> 
CypressTest/report/cucumber-html-report                               -**cucumber html reports for the test**<br />
CypressTest/cucumber-json/								            -**Output Json file created after test execution**<br /> 
CypressTest/integration/page_objects/		-**Page Objects which interacts with Application Under Test**<br />
CypressTest/integration/step_defenition	-**JS based scripts for Automation**<br /> 
CypressTest/integration/signIn.feature	-**Gherkin document**<br />
CypressTest/package.json								              -**Browser can be selected by editing "scripts:testscenario" uses Firefox as default**<br />

## Installation
Install the plugin by running:<br />
C:\>git clone https://github.com/arulkumartamilmani/AutomationPractice<br />
C:\>cd AutomationPractice<br />
C:\>npm install --save-dev cypress-cucumber-preprocessor<br />
c:\>npm install cucumber-html-reporter --save-dev<br />
C:\>npm cypress-xpath<br />

## Run
The tests can be executed as<br />

C:/>cd AutomationPractice<br />
C:/CypressTest>npm run testscenario && npm run report<br />