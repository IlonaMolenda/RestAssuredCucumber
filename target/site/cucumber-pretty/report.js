$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("city-movies.feature");
formatter.feature({
  "line": 1,
  "name": "City movies advanced",
  "description": "",
  "id": "city-movies-advanced",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Get locations",
  "description": "",
  "id": "city-movies-advanced;get-locations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the apis are up and running for \"http://cmapi.bananaappscenter.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a user performs a GET request to \"api/Location/LocationDetails\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "perform the request",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the request code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see json response with pairs on the filtered \"Msg\" node",
  "rows": [
    {
      "cells": [
        "Message",
        "Success Location Details"
      ],
      "line": 9
    },
    {
      "cells": [
        "StatusCode",
        "200"
      ],
      "line": 10
    },
    {
      "cells": [
        "isError",
        "false"
      ],
      "line": 11
    },
    {
      "cells": [
        "isSuccess",
        "true"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cmapi.bananaappscenter.com/",
      "offset": 33
    }
  ],
  "location": "CityMoviesSteps.theApisAreUpAndRunningFor(String)"
});
formatter.result({
  "duration": 1605880034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "api/Location/LocationDetails",
      "offset": 34
    }
  ],
  "location": "CityMoviesSteps.aUserPerformsAGETRequestTo(String)"
});
formatter.result({
  "duration": 141047,
  "status": "passed"
});
formatter.match({
  "location": "CityMoviesSteps.performTheRequest()"
});
formatter.result({
  "duration": 386897307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "CityMoviesSteps.theRequestCodeShouldBe(int)"
});
formatter.result({
  "duration": 2605489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Msg",
      "offset": 55
    }
  ],
  "location": "CityMoviesSteps.iShouldSeeJsonResponseWithPairsOnTheFilteredNode(String,DataTable)"
});
formatter.result({
  "duration": 203482025,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Check the movie details",
  "description": "",
  "id": "city-movies-advanced;check-the-movie-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "the apis are up and running for \"http://cmapi.bananaappscenter.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a user performs a POST request to \"api/MovieBooking/MovieBooking\" with below detail",
  "rows": [
    {
      "cells": [
        "Mov_ID",
        "3"
      ],
      "line": 17
    },
    {
      "cells": [
        "Location_ID",
        "5"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "perform the POST request",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the request code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should see json response with pairs on the filtered \"Msg\" node",
  "rows": [
    {
      "cells": [
        "Message",
        "Success Moviebooking Details"
      ],
      "line": 22
    },
    {
      "cells": [
        "StatusCode",
        "200"
      ],
      "line": 23
    },
    {
      "cells": [
        "isError",
        "false"
      ],
      "line": 24
    },
    {
      "cells": [
        "isSuccess",
        "true"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://cmapi.bananaappscenter.com/",
      "offset": 33
    }
  ],
  "location": "CityMoviesSteps.theApisAreUpAndRunningFor(String)"
});
formatter.result({
  "duration": 338086261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "api/MovieBooking/MovieBooking",
      "offset": 35
    }
  ],
  "location": "CityMoviesSteps.aUserPerformsAPOSTRequestToWithBelowDetail(String,DataTable)"
});
formatter.result({
  "duration": 161146,
  "status": "passed"
});
formatter.match({
  "location": "CityMoviesSteps.performThePOSTRequest()"
});
formatter.result({
  "duration": 447019961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "CityMoviesSteps.theRequestCodeShouldBe(int)"
});
formatter.result({
  "duration": 245774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Msg",
      "offset": 55
    }
  ],
  "location": "CityMoviesSteps.iShouldSeeJsonResponseWithPairsOnTheFilteredNode(String,DataTable)"
});
formatter.result({
  "duration": 2478546,
  "status": "passed"
});
});