/**
* Get Object Attributes
* @params {object} obj
*/
function get_object_vars (obj) {
    var attributes = {}, property = '';  
  
    for (property in obj) {  
        if (typeof obj[property] !== 'function' && property !== 'prototype') {  
           attributes[property] = obj[property];  
        }  
    }  
    return attributes;
}  
