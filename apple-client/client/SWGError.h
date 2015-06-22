#import <Foundation/Foundation.h>
#import "SWGObject.h"


@protocol SWGError
@end
  
@interface SWGError : SWGObject


@property(nonatomic) NSString* message;

@property(nonatomic) NSString* fields;

@end
