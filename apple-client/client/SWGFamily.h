#import <Foundation/Foundation.h>
#import "SWGObject.h"


@protocol SWGFamily
@end
  
@interface SWGFamily : SWGObject

/* a name of a family [optional]
 */
@property(nonatomic) NSString* familyName;
/* The residence of the family. [optional]
 */
@property(nonatomic) NSString* residence;

@end
