Feature: City movies advanced

  Scenario: Get locations
    Given the apis are up and running for "http://cmapi.bananaappscenter.com/"
    When a user performs a GET request to "api/Location/LocationDetails"
    And perform the request
    Then the request code should be 200
    And I should see json response with pairs on the filtered "Msg" node
      | Message    | Success Location Details |
      | StatusCode | 200                      |
      | isError    | false                    |
      | isSuccess  | true                     |

  Scenario: Check the movie details
    Given the apis are up and running for "http://cmapi.bananaappscenter.com/"
    When a user performs a POST request to "api/MovieBooking/MovieBooking" with below detail
      | Mov_ID    | 3 |
      | Location_ID | 5 |
    And perform the POST request
    Then the request code should be 200
    And I should see json response with pairs on the filtered "Msg" node
      | Message    | Success Moviebooking Details |
      | StatusCode | 200                      |
      | isError    | false                    |
      | isSuccess  | true                     |