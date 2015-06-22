#import "SWGPerson.h"

@implementation SWGPerson
  
+ (JSONKeyMapper *)keyMapper
{
  return [[JSONKeyMapper alloc] initWithDictionary:@{ @"familyname": @"familyname", @"given_name": @"givenName", @"sex": @"sex", @"image": @"image" }];
}

+ (BOOL)propertyIsOptional:(NSString *)propertyName
{
  NSArray *optionalProperties = @[@"familyname", @"givenName", @"sex", @"image"];

  if ([optionalProperties containsObject:propertyName]) {
    return YES;
  }
  else {
    return NO;
  }
}

@end
