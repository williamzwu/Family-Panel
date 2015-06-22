package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.ApiInvoker;

import io.swagger.client.model.*;

import java.util.*;

import io.swagger.client.model.Family;
import io.swagger.client.model.Error;

import org.apache.http.HttpEntity;
import org.apache.http.entity.mime.MultipartEntityBuilder;

import java.util.Map;
import java.util.HashMap;
import java.io.File;

public class FamiliesApi {
  String basePath = "https://api.wuber.com/v1";
  ApiInvoker apiInvoker = ApiInvoker.getInstance();

  public void addHeader(String key, String value) {
    getInvoker().addDefaultHeader(key, value);
  }

  public ApiInvoker getInvoker() {
    return apiInvoker;
  }

  public void setBasePath(String basePath) {
    this.basePath = basePath;
  }

  public String getBasePath() {
    return basePath;
  }

  
  /**
   * Family Tree around this family
   * The family endpoint returns information describing the family tree around specified family.
   * @param familyname The name of the family.
   * @param generation The number of generation below the father of the asked family.
   * @return List<Family>
   */
  public List<Family>  familyGet (String familyname, String generation) throws ApiException {
    Object postBody = null;
    
    // verify the required parameter 'familyname' is set
    if (familyname == null) {
       throw new ApiException(400, "Missing the required parameter 'familyname' when calling familyGet");
    }
    
    // verify the required parameter 'generation' is set
    if (generation == null) {
       throw new ApiException(400, "Missing the required parameter 'generation' when calling familyGet");
    }
    

    // create path and map variables
    String path = "/family".replaceAll("\\{format\\}","json");

    // query params
    Map<String, String> queryParams = new HashMap<String, String>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();

    if (familyname != null)
      queryParams.put("familyname", ApiInvoker.parameterToString(familyname));
    if (generation != null)
      queryParams.put("generation", ApiInvoker.parameterToString(generation));
    

    

    String[] contentTypes = {
      
    };
    String contentType = contentTypes.length > 0 ? contentTypes[0] : "application/json";

    if (contentType.startsWith("multipart/form-data")) {
      // file uploading
      MultipartEntityBuilder builder = MultipartEntityBuilder.create();
      

      HttpEntity httpEntity = builder.build();
      postBody = httpEntity;
    } else {
      // normal form params
      
    }

    try {
      String response = apiInvoker.invokeAPI(basePath, path, "GET", queryParams, postBody, headerParams, formParams, contentType);
      if(response != null){
        return (List<Family>) ApiInvoker.deserialize(response, "array", Family.class);
      }
      else {
        return null;
      }
    } catch (ApiException ex) {
      throw ex;
    }
  }
  
}
