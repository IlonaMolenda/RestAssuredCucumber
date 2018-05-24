package holder;

import com.jayway.restassured.response.Headers;
import com.jayway.restassured.response.Response;

public class ResponseHolder {

  private Response response;
//  private int responseCode;
//  private String responseBody;
//  private Headers responseHeaders;

  public Response getResponse() {
    return response;
  }

  public void setResponse(Response response) {
    this.response = response;
  }

  public int getResponseCode() {
    return response.getStatusCode();
  }


  public String getResponseBody() {
    return response.asString();
  }


  public Headers getResponseHeaders() {
    return response.getHeaders();
  }

}
