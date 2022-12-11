Feature: _Google

  @webdriverIOScenario1
  Scenario: As a user, I should be able to search on google

    Given I am on the login page _Google
    When I enter text _Google
    When I click search button button _Google
    Then I able to see the searched results _Google


  