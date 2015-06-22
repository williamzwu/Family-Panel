package io.swagger.client.model;


import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class Family  {
  
  @SerializedName("family_name")
  private String familyName = null;
  @SerializedName("residence")
  private String residence = null;

  
  /**
   * a name of a family
   **/
  @ApiModelProperty(value = "a name of a family")
  public String getFamilyName() {
    return familyName;
  }
  public void setFamilyName(String familyName) {
    this.familyName = familyName;
  }

  
  /**
   * The residence of the family.
   **/
  @ApiModelProperty(value = "The residence of the family.")
  public String getResidence() {
    return residence;
  }
  public void setResidence(String residence) {
    this.residence = residence;
  }

  

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class Family {\n");
    
    sb.append("  familyName: ").append(familyName).append("\n");
    sb.append("  residence: ").append(residence).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
