#import <Foundation/Foundation.h>
#import "SWGFamily.h"
#import "SWGError.h"
#import "SWGObject.h"
#import "SWGApiClient.h"


@interface SWGFamiliesApi: NSObject

@property(nonatomic, assign)SWGApiClient *apiClient;

-(instancetype) initWithApiClient:(SWGApiClient *)apiClient;
-(void) addHeader:(NSString*)value forKey:(NSString*)key;
-(unsigned long) requestQueueSize;
+(SWGFamiliesApi*) apiWithHeader:(NSString*)headerValue key:(NSString*)key;
+(void) setBasePath:(NSString*)basePath;
+(NSString*) getBasePath;
/**

 Family Tree around this family
 The family endpoint returns information describing the family tree around specified family.

 @param familyname The name of the family.
 @param generation The number of generation below the father of the asked family.
 

 return type: NSArray<SWGFamily>*
 */
-(NSNumber*) familyGetWithCompletionBlock :(NSString*) familyname 
     generation:(NSString*) generation 
    
    completionHandler: (void (^)(NSArray<SWGFamily>* output, NSError* error))completionBlock;
    



@end
