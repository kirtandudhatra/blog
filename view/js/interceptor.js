var testInterceptor = function ($q)  
{  
    return {  
        request: function (config)  
        {  
            console.log(config);
            console.log('request started...');  
            return config;
        },  
        requestError: function (rejection)  
        {  
            console.log(rejection);  
            // Contains the data about the error on the request and return the promise rejection.    
            return $q.reject(rejection);  
        },  
        response: function (result)  
        {  
            console.log(result);  
            //If some manipulation of result is required before assigning to scope.    
            //result["testKey"] = 'testValue';  
            console.log('request completed');  
            if(result.data.status == 0)
                window.location.replace('/');
            return result;  
        },  
        responseError: function (err,response)  
        {  
            console.log('response error started...');  
            //Check different response status and do the necessary actions 400, 401, 403,401, or 500 eror     
            console.log(err);  
        }  
    }  
} 