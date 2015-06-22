package io.swagger.client.model;


import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class Error  {
  
  @SerializedName("message")
  private String message = null;
  @SerializedName("fields")
  private String fields = null;

  
  /**
   **/
  @ApiModelProperty(value = "")
  public String getMessage() {
    return message;
  }
  public void setMessage(String message) {
    this.message = message;
  }

  
  /**
   **/
  @ApiModelProperty(value = "")
  public String getFields() {
    return fields;
  }
  public void setFields(String fields) {
    this.fields = fields;
  }

  

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class Error {\n");
    
    sb.append("  message: ").append(message).append("\n");
    sb.append("  fields: ").append(fields).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
