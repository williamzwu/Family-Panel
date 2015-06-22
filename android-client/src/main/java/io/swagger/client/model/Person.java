package io.swagger.client.model;


import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class Person  {
  
  @SerializedName("familyname")
  private String familyname = null;
  @SerializedName("given_name")
  private String givenName = null;
  @SerializedName("sex")
  private String sex = null;
  @SerializedName("image")
  private String image = null;

  
  /**
   * The family name (sir name, last name) of the person.
   **/
  @ApiModelProperty(value = "The family name (sir name, last name) of the person.")
  public String getFamilyname() {
    return familyname;
  }
  public void setFamilyname(String familyname) {
    this.familyname = familyname;
  }

  
  /**
   * The given name (first name) of person.
   **/
  @ApiModelProperty(value = "The given name (first name) of person.")
  public String getGivenName() {
    return givenName;
  }
  public void setGivenName(String givenName) {
    this.givenName = givenName;
  }

  
  /**
   * The sex of the person.
   **/
  @ApiModelProperty(value = "The sex of the person.")
  public String getSex() {
    return sex;
  }
  public void setSex(String sex) {
    this.sex = sex;
  }

  
  /**
   * Image URL representing the person.
   **/
  @ApiModelProperty(value = "Image URL representing the person.")
  public String getImage() {
    return image;
  }
  public void setImage(String image) {
    this.image = image;
  }

  

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class Person {\n");
    
    sb.append("  familyname: ").append(familyname).append("\n");
    sb.append("  givenName: ").append(givenName).append("\n");
    sb.append("  sex: ").append(sex).append("\n");
    sb.append("  image: ").append(image).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
