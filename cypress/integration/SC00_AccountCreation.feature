@feature-AccountCreation
Feature: Account Creation 

  User Creates An Account
  @TC001
  Scenario: Account Creation with valid/unregistered email id
    Given On SignIn Page
    And user enters "validandunregistered" email id 
    And user clicks the CreateAccount button
    Then user lands on Account Creation Page

  @TC002
  Scenario: Create account page with valid format of mandatory fields only
    #Pre-requisite TC001
    Given On SignIn Page
    And user enters "validandunregistered" email id
    And user clicks the CreateAccount button
    Then user lands on Account Creation Page
    #Test Case
    When user fills in all mandatory fields only with valid format
    And clicks on Register button
    Then lands in my Account page on successful account creation
    

  @TC005
  Scenario: Account Creation with valid and registered email id
    Given On SignIn Page
    And user enters "validandregistered" email id
    And user clicks the CreateAccount button
    Then verify notification that email id is already registered