#import <Foundation/Foundation.h>
#import "SWGPerson.h"
#import "SWGError.h"
#import "SWGObject.h"
#import "SWGApiClient.h"


@interface SWGMyselfApi: NSObject

@property(nonatomic, assign)SWGApiClient *apiClient;

-(instancetype) initWithApiClient:(SWGApiClient *)apiClient;
-(void) addHeader:(NSString*)value forKey:(NSString*)key;
-(unsigned long) requestQueueSize;
+(SWGMyselfApi*) apiWithHeader:(NSString*)headerValue key:(NSString*)key;
+(void) setBasePath:(NSString*)basePath;
+(NSString*) getBasePath;
/**

 Direct family members
 The direct family members.

 @param person the name of the person.
 

 return type: NSArray<SWGPerson>*
 */
-(NSNumber*) iamGetWithCompletionBlock :(NSString*) person 
    
    completionHandler: (void (^)(NSArray<SWGPerson>* output, NSError* error))completionBlock;
    



@end
