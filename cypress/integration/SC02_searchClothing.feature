@feature-Search
Feature: Search for Clothing

  User Seached for Clothing items
  @TC011
  Scenario: Search for exiting clothing item
    Given On Home Page
    When user searches for products
    Then user lands on Search Result Page
    