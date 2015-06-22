#import "SWGMyselfApi.h"
#import "SWGFile.h"
#import "SWGQueryParamCollection.h"
#import "SWGPerson.h"
#import "SWGError.h"


@interface SWGMyselfApi ()
    @property (readwrite, nonatomic, strong) NSMutableDictionary *defaultHeaders;
@end

@implementation SWGMyselfApi

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

+(SWGMyselfApi*) apiWithHeader:(NSString*)headerValue key:(NSString*)key {
    static SWGMyselfApi* singletonAPI = nil;

    if (singletonAPI == nil) {
        singletonAPI = [[SWGMyselfApi alloc] init];
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
 * Direct family members
 * The direct family members.
 * \param person the name of the person.
 * \returns NSArray<SWGPerson>*
 */
-(NSNumber*) iamGetWithCompletionBlock: (NSString*) person
        
        completionHandler: (void (^)(NSArray<SWGPerson>* output, NSError* error))completionBlock
         {

    
    // verify the required parameter 'person' is set
    NSAssert(person != nil, @"Missing the required parameter `person` when calling iamGet");
    

    NSMutableString* requestUrl = [NSMutableString stringWithFormat:@"%@/Iam", basePath];

    // remove format in URL if needed
    if ([requestUrl rangeOfString:@".{format}"].location != NSNotFound)
        [requestUrl replaceCharactersInRange: [requestUrl rangeOfString:@".{format}"] withString:@".json"];

    

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if(person != nil) {
        
        queryParams[@"person"] = person;
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



