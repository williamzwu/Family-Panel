#import "SWGFamiliesApi.h"
#import "SWGFile.h"
#import "SWGQueryParamCollection.h"
#import "SWGFamily.h"
#import "SWGError.h"


@interface SWGFamiliesApi ()
    @property (readwrite, nonatomic, strong) NSMutableDictionary *defaultHeaders;
@end

@implementation SWGFamiliesApi

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

+(SWGFamiliesApi*) apiWithHeader:(NSString*)headerValue key:(NSString*)key {
    static SWGFamiliesApi* singletonAPI = nil;

    if (singletonAPI == nil) {
        singletonAPI = [[SWGFamiliesApi alloc] init];
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
 * Family Tree around this family
 * The family endpoint returns information describing the family tree around specified family.
 * \param familyname The name of the family.
 * \param generation The number of generation below the father of the asked family.
 * \returns NSArray<SWGFamily>*
 */
-(NSNumber*) familyGetWithCompletionBlock: (NSString*) familyname
         generation: (NSString*) generation
        
        completionHandler: (void (^)(NSArray<SWGFamily>* output, NSError* error))completionBlock
         {

    
    // verify the required parameter 'familyname' is set
    NSAssert(familyname != nil, @"Missing the required parameter `familyname` when calling familyGet");
    
    // verify the required parameter 'generation' is set
    NSAssert(generation != nil, @"Missing the required parameter `generation` when calling familyGet");
    

    NSMutableString* requestUrl = [NSMutableString stringWithFormat:@"%@/family", basePath];

    // remove format in URL if needed
    if ([requestUrl rangeOfString:@".{format}"].location != NSNotFound)
        [requestUrl replaceCharactersInRange: [requestUrl rangeOfString:@".{format}"] withString:@".json"];

    

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if(familyname != nil) {
        
        queryParams[@"familyname"] = familyname;
    }
    if(generation != nil) {
        
        queryParams[@"generation"] = generation;
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
                        
                        
                        SWGFamily* d = [[SWGFamily alloc] initWithDictionary:dict error:nil];
                        
                        [objs addObject:d];
                    }
                    completionBlock((NSArray<SWGFamily>*)objs, nil);
                }
                
                
            }];
    


    

    
}



@end



