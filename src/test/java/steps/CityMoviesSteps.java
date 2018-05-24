package steps;

import static com.jayway.restassured.RestAssured.given;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import com.jayway.restassured.http.ContentType;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.it.Data;
import cucumber.api.java.it.Ma;
import gherkin.formatter.model.DataTableRow;
import holder.ResponseHolder;
import com.jayway.restassured.response.Response;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.util.HashMap;
import java.util.Map;
import org.junit.Assert;


public class CityMoviesSteps {

  String url;
  ResponseHolder responseHolder = new ResponseHolder();
  Response response;
  Map<String, Object> responseMap;
  Map<String, String> query;
  Map<String, String > body;

  @Given("^the apis are up and running for \"([^\"]*)\"$")
  public void theApisAreUpAndRunningFor(String url) throws Throwable {
   this.url = url;
   response = given().when().get(url);
   Assert.assertEquals(200, response.getStatusCode());
  }

  @When("^a user performs a GET request to \"([^\"]*)\"$")
  public void aUserPerformsAGETRequestTo(String api_url) throws Throwable {
    this.url = this.url + api_url;

  }

  @And("^perform the request$")
  public void performTheRequest() throws Throwable {
    System.out.println("URL is " + this.url + query + '\n');

    if(query == null){
      response = given().when().get(this.url);
    }
    else {
      response = given().queryParameters(query).when().get(this.url);
    }
    responseHolder.setResponse(response);
  }

  @Then("^the request code should be (\\d+)$")
  public void theRequestCodeShouldBe(int respCode) throws Throwable {
    Assert.assertEquals(respCode, responseHolder.getResponseCode());
    System.out.println(respCode);
    System.out.println(responseHolder.getResponseCode());
    System.out.println();

  }

  @And("^I should see json response with pairs on the filtered \"([^\"]*)\" node$")
  public void iShouldSeeJsonResponseWithPairsOnTheFilteredNode(String filter, DataTable dataTable) throws Throwable {
    Map<String, String> query = new HashMap<>();

    for (DataTableRow row: dataTable.getGherkinRows()){
      query.put(row.getCells().get(0), row.getCells().get(1));
    }

    ObjectReader reader= new ObjectMapper().reader(Map.class);

    responseMap = reader.readValue(responseHolder.getResponseBody());
    System.out.println(responseMap);
    System.out.println();
    responseMap = (Map<String, Object>) responseMap.get(filter);

    for (String key : query.keySet()){
      Assert.assertTrue(responseMap.containsKey(key));
      Assert.assertEquals(query.get(key), responseMap.get(key).toString());
    }
  }

  @When("^a user performs a POST request to \"([^\"]*)\" with below detail$")
  public void aUserPerformsAPOSTRequestToWithBelowDetail(String api_url, DataTable dataTable) throws Throwable {
    this.url = this.url + api_url;
    this.body = new HashMap<>();
    for (DataTableRow row : dataTable.getGherkinRows()){
      this.body.put(row.getCells().get(0), row.getCells().get(1));
    }

    System.out.println(this.url);
    System.out.println();
    System.out.println(this.body);
    System.out.println();
  }

  @And("^perform the POST request$")
  public void performThePOSTRequest() throws Throwable {
    response = given().contentType(ContentType.JSON).body(this.body).when().post(this.url);
    responseHolder.setResponse(response);
  }
}
