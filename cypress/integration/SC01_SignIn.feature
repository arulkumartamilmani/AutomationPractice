@feature-Signin
Feature: Login in Automation Practice

  User Signs In
  @TC007
  Scenario: Login with valid username and password
    Given On Home Page
    When user click on Sign in
    Then user lands on Signin Page
    And user enters "valid" username 
    And user enters "valid" password 
    And user clicks the SignIn button
    Then user lands on Account Page
    And user clicks the Logout button

  @TC008
  Scenario: Login with valid username and wrong password
    Given On Home Page
    When user click on Sign in
    Then user lands on Signin Page
    And user enters "valid" username 
    And user enters "invalid" password 
    And user clicks the SignIn button
    Then user encounters Authentiation error

  @TC009
  Scenario: Login with invalid username and password
    Given On Home Page
    When user click on Sign in
    Then user lands on Signin Page
    And user enters "invalid" username 
    And user enters "invalid" password 
    And user clicks the SignIn button
    Then user encounters Authentiation error