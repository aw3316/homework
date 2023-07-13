function getParameter(paramName, paramValue) {
    var parameter = {
        paramName: paramName,
        paramValue: paramValue
    };

    return parameter;
}

function getParameters(serch) {
    var params = serch.substr(1).split('&');
    
    for(var i in params) {
        var param = params[i].split('=');
        params[i] = getParameter(param[0], param[1]);
    }
    // return params;
    var parameters = {
        params: params,
        
        getParamValue: function(paramName) {
            var paramValue = ''; 

            for(var i in this.params) {
                if(params[i].paramName === paramName) {
                    paramValue = params[i].paramValue;
                    break;
                }
            }

            return paramValue; 
        }
    } ;
    return parameters;
}
 // var search = '?name=longlee&age=23&gender=male';
 // alert(getParameters(search)[0].paramName + ' : ' + getParameters(search)[1].paramValue);

