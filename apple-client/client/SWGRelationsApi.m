#import "SWGRelationsApi.h"
#import "SWGFile.h"
#import "SWGQueryParamCollection.h"
#import "SWGPerson.h"
#import "SWGError.h"


@interface SWGRelationsApi ()
    @property (readwrite, nonatomic, strong) NSMutableDictionary *defaultHeaders;
@end

@implementation SWGRelationsApi

static NSString * basePath = @"https://api.wuber.com/v1";

#pragma mark - Initialize methods

- (id) init {
    self = [super init];
    if (self) {
        self.apiClient = [SWGApiClient sharedClientFromPool:basePath];
        self.defaultHeaders = [NSMutableDictionary dictionary];
    }
    return self;
}

- (id) initWithApiClient:(SWGApiClient *)apiClient {
    self = [super init];
    if (self) {
        if (apiClient) {
            self.apiClient = apiClient;
        }
        else {
            self.apiClient = [SWGApiClient sharedClientFromPool:basePath];
        }
        self.defaultHeaders = [NSMutableDictionary dictionary];
    }
    return self;
}

#pragma mark -

+(SWGRelationsApi*) apiWithHeader:(NSString*)headerValue key:(NSString*)key {
    static SWGRelationsApi* singletonAPI = nil;

    if (singletonAPI == nil) {
        singletonAPI = [[SWGRelationsApi alloc] init];
        [singletonAPI addHeader:headerValue forKey:key];
    }
    return singletonAPI;
}

+(void) setBasePath:(NSString*)path {
    basePath = path;
}

+(NSString*) getBasePath {
    return basePath;
}

-(void) addHeader:(NSString*)value forKey:(NSString*)key {
    [self.defaultHeaders setValue:value forKey:key];
}

-(void) setHeaderValue:(NSString*) value
           forKey:(NSString*)key {
    [self.defaultHeaders setValue:value forKey:key];
}

-(unsigned long) requestQueueSize {
    return [SWGApiClient requestQueueSize];
}


/*!
 * List of ancestors
 * The list of ancestors.
 * \param person the name of the person.
 * \param generation the number of generation of ancestors.
 * \param bloodrelative Type of blood relative, lineal, collateral, adopted or all
 * \returns NSArray<SWGPerson>*
 */
-(NSNumber*) relationsAncestorsGetWithCompletionBlock: (NSString*) person
         generation: (NSString*) generation
         bloodrelative: (NSString*) bloodrelative
        
        completionHandler: (void (^)(NSArray<SWGPerson>* output, NSError* error))completionBlock
         {

    
    // verify the required parameter 'person' is set
    NSAssert(person != nil, @"Missing the required parameter `person` when calling relationsAncestorsGet");
    
    // verify the required parameter 'generation' is set
    NSAssert(generation != nil, @"Missing the required parameter `generation` when calling relationsAncestorsGet");
    

    NSMutableString* requestUrl = [NSMutableString stringWithFormat:@"%@/relations/ancestors", basePath];

    // remove format in URL if needed
    if ([requestUrl rangeOfString:@".{format}"].location != NSNotFound)
        [requestUrl replaceCharactersInRange: [requestUrl rangeOfString:@".{format}"] withString:@".json"];

    

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if(person != nil) {
        
        queryParams[@"person"] = person;
    }
    if(generation != nil) {
        
        queryParams[@"generation"] = generation;
    }
    if(bloodrelative != nil) {
        
        queryParams[@"bloodrelative"] = bloodrelative;
    }
    
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.defaultHeaders];

    
    
    // HTTP header `Accept` 
    headerParams[@"Accept"] = [SWGApiClient selectHeaderAccept:@[]];
    if ([headerParams[@"Accept"] length] == 0) {
        [headerParams removeObjectForKey:@"Accept"];
    }

    // response content type
    NSString *responseContentType;
    if ([headerParams objectForKey:@"Accept"]) {
        responseContentType = [headerParams[@"Accept"] componentsSeparatedByString:@", "][0];
    }
    else {
        responseContentType = @"";
    }

    // request content type
    NSString *requestContentType = [SWGApiClient selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[];
    
    id bodyDictionary = nil;
    
    

    NSMutableDictionary * formParams = [[NSMutableDictionary alloc]init];

    
    

    

    
    // response is in a container
        // array container response type
    return [self.apiClient dictionary: requestUrl 
                       method: @"GET" 
                  queryParams: queryParams 
                         body: bodyDictionary 
                 headerParams: headerParams
                 authSettings: authSettings
           requestContentType: requestContentType
          responseContentType: responseContentType
              completionBlock: ^(NSDictionary *data, NSError *error) {
                if (error) {
                    completionBlock(nil, error);
                    return;
                }
                
                if([data isKindOfClass:[NSArray class]]){
                    NSMutableArray * objs = [[NSMutableArray alloc] initWithCapacity:[data count]];
                    for (NSDictionary* dict in (NSArray*)data) {
                        
                        
                        SWGPerson* d = [[SWGPerson alloc] initWithDictionary:dict error:nil];
                        
                        [objs addObject:d];
                    }
                    completionBlock((NSArray<SWGPerson>*)objs, nil);
                }
                
                
            }];
    


    

    
}

/*!
 * List of descendants
 * The list of descendants.
 * \param person the name of the person.
 * \param generation the number of generation of descendants.
 * \param bloodrelative Type of blood relative, lineal, collateral, adopted or all.
 * \returns NSArray<SWGPerson>*
 */
-(NSNumber*) relationsDescendantsGetWithCompletionBlock: (NSString*) person
         generation: (NSString*) generation
         bloodrelative: (NSString*) bloodrelative
        
        completionHandler: (void (^)(NSArray<SWGPerson>* output, NSError* error))completionBlock
         {

    
    // verify the required parameter 'person' is set
    NSAssert(person != nil, @"Missing the required parameter `person` when calling relationsDescendantsGet");
    
    // verify the required parameter 'generation' is set
    NSAssert(generation != nil, @"Missing the required parameter `generation` when calling relationsDescendantsGet");
    

    NSMutableString* requestUrl = [NSMutableString stringWithFormat:@"%@/relations/descendants", basePath];

    // remove format in URL if needed
    if ([requestUrl rangeOfString:@".{format}"].location != NSNotFound)
        [requestUrl replaceCharactersInRange: [requestUrl rangeOfString:@".{format}"] withString:@".json"];

    

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if(person != nil) {
        
        queryParams[@"person"] = person;
    }
    if(generation != nil) {
        
        queryParams[@"generation"] = generation;
    }
    if(bloodrelative != nil) {
        
        queryParams[@"bloodrelative"] = bloodrelative;
    }
    
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.defaultHeaders];

    
    
    // HTTP header `Accept` 
    headerParams[@"Accept"] = [SWGApiClient selectHeaderAccept:@[]];
    if ([headerParams[@"Accept"] length] == 0) {
        [headerParams removeObjectForKey:@"Accept"];
    }

    // response content type
    NSString *responseContentType;
    if ([headerParams objectForKey:@"Accept"]) {
        responseContentType = [headerParams[@"Accept"] componentsSeparatedByString:@", "][0];
    }
    else {
        responseContentType = @"";
    }

    // request content type
    NSString *requestContentType = [SWGApiClient selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[];
    
    id bodyDictionary = nil;
    
    

    NSMutableDictionary * formParams = [[NSMutableDictionary alloc]init];

    
    

    

    
    // response is in a container
        // array container response type
    return [self.apiClient dictionary: requestUrl 
                       method: @"GET" 
                  queryParams: queryParams 
                         body: bodyDictionary 
                 headerParams: headerParams
                 authSettings: authSettings
           requestContentType: requestContentType
          responseContentType: responseContentType
              completionBlock: ^(NSDictionary *data, NSError *error) {
                if (error) {
                    completionBlock(nil, error);
                    return;
                }
                
                if([data isKindOfClass:[NSArray class]]){
                    NSMutableArray * objs = [[NSMutableArray alloc] initWithCapacity:[data count]];
                    for (NSDictionary* dict in (NSArray*)data) {
                        
                        
                        SWGPerson* d = [[SWGPerson alloc] initWithDictionary:dict error:nil];
                        
                        [objs addObject:d];
                    }
                    completionBlock((NSArray<SWGPerson>*)objs, nil);
                }
                
                
            }];
    


    

    
}



@end



