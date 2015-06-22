#import <Foundation/Foundation.h>
#import "SWGObject.h"


@protocol SWGPerson
@end
  
@interface SWGPerson : SWGObject

/* The family name (sir name, last name) of the person. [optional]
 */
@property(nonatomic) NSString* familyname;
/* The given name (first name) of person. [optional]
 */
@property(nonatomic) NSString* givenName;
/* The sex of the person. [optional]
 */
@property(nonatomic) NSString* sex;
/* Image URL representing the person. [optional]
 */
@property(nonatomic) NSString* image;

@end
