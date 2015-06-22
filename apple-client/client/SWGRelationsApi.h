#import <Foundation/Foundation.h>
#import "SWGPerson.h"
#import "SWGError.h"
#import "SWGObject.h"
#import "SWGApiClient.h"


@interface SWGRelationsApi: NSObject

@property(nonatomic, assign)SWGApiClient *apiClient;

-(instancetype) initWithApiClient:(SWGApiClient *)apiClient;
-(void) addHeader:(NSString*)value forKey:(NSString*)key;
-(unsigned long) requestQueueSize;
+(SWGRelationsApi*) apiWithHeader:(NSString*)headerValue key:(NSString*)key;
+(void) setBasePath:(NSString*)basePath;
+(NSString*) getBasePath;
/**

 List of ancestors
 The list of ancestors.

 @param person the name of the person.
 @param generation the number of generation of ancestors.
 @param bloodrelative Type of blood relative, lineal, collateral, adopted or all
 

 return type: NSArray<SWGPerson>*
 */
-(NSNumber*) relationsAncestorsGetWithCompletionBlock :(NSString*) person 
     generation:(NSString*) generation 
     bloodrelative:(NSString*) bloodrelative 
    
    completionHandler: (void (^)(NSArray<SWGPerson>* output, NSError* error))completionBlock;
    


/**

 List of descendants
 The list of descendants.

 @param person the name of the person.
 @param generation the number of generation of descendants.
 @param bloodrelative Type of blood relative, lineal, collateral, adopted or all.
 

 return type: NSArray<SWGPerson>*
 */
-(NSNumber*) relationsDescendantsGetWithCompletionBlock :(NSString*) person 
     generation:(NSString*) generation 
     bloodrelative:(NSString*) bloodrelative 
    
    completionHandler: (void (^)(NSArray<SWGPerson>* output, NSError* error))completionBlock;
    



@end
