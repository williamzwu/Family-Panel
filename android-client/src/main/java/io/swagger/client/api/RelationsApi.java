package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.ApiInvoker;

import io.swagger.client.model.*;

import java.util.*;

import io.swagger.client.model.Error;
import io.swagger.client.model.Person;

import org.apache.http.HttpEntity;
import org.apache.http.entity.mime.MultipartEntityBuilder;

import java.util.Map;
import java.util.HashMap;
import java.io.File;

public class RelationsApi {
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
   * List of ancestors
   * The list of ancestors.
   * @param person the name of the person.
   * @param generation the number of generation of ancestors.
   * @param bloodrelative Type of blood relative, lineal, collateral, adopted or all
   * @return List<Person>
   */
  public List<Person>  relationsAncestorsGet (String person, String generation, String bloodrelative) throws ApiException {
    Object postBody = null;
    
    // verify the required parameter 'person' is set
    if (person == null) {
       throw new ApiException(400, "Missing the required parameter 'person' when calling relationsAncestorsGet");
    }
    
    // verify the required parameter 'generation' is set
    if (generation == null) {
       throw new ApiException(400, "Missing the required parameter 'generation' when calling relationsAncestorsGet");
    }
    

    // create path and map variables
    String path = "/relations/ancestors".replaceAll("\\{format\\}","json");

    // query params
    Map<String, String> queryParams = new HashMap<String, String>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();

    if (person != null)
      queryParams.put("person", ApiInvoker.parameterToString(person));
    if (generation != null)
      queryParams.put("generation", ApiInvoker.parameterToString(generation));
    if (bloodrelative != null)
      queryParams.put("bloodrelative", ApiInvoker.parameterToString(bloodrelative));
    

    

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
        return (List<Person>) ApiInvoker.deserialize(response, "array", Person.class);
      }
      else {
        return null;
      }
    } catch (ApiException ex) {
      throw ex;
    }
  }
  
  /**
   * List of descendants
   * The list of descendants.
   * @param person the name of the person.
   * @param generation the number of generation of descendants.
   * @param bloodrelative Type of blood relative, lineal, collateral, adopted or all.
   * @return List<Person>
   */
  public List<Person>  relationsDescendantsGet (String person, String generation, String bloodrelative) throws ApiException {
    Object postBody = null;
    
    // verify the required parameter 'person' is set
    if (person == null) {
       throw new ApiException(400, "Missing the required parameter 'person' when calling relationsDescendantsGet");
    }
    
    // verify the required parameter 'generation' is set
    if (generation == null) {
       throw new ApiException(400, "Missing the required parameter 'generation' when calling relationsDescendantsGet");
    }
    

    // create path and map variables
    String path = "/relations/descendants".replaceAll("\\{format\\}","json");

    // query params
    Map<String, String> queryParams = new HashMap<String, String>();
    // header params
    Map<String, String> headerParams = new HashMap<String, String>();
    // form params
    Map<String, String> formParams = new HashMap<String, String>();

    if (person != null)
      queryParams.put("person", ApiInvoker.parameterToString(person));
    if (generation != null)
      queryParams.put("generation", ApiInvoker.parameterToString(generation));
    if (bloodrelative != null)
      queryParams.put("bloodrelative", ApiInvoker.parameterToString(bloodrelative));
    

    

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
        return (List<Person>) ApiInvoker.deserialize(response, "array", Person.class);
      }
      else {
        return null;
      }
    } catch (ApiException ex) {
      throw ex;
    }
  }
  
}
