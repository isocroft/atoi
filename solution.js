/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var digit = 0, sign = 0, place_value = 0, i = 0, INT_MAX = Math.pow(2, 31) - 1, INT_MIN = Math.pow(-2, 31);
    
    // check for valid input
    if(str == void(0) || str.length == 0){
        return digit
    }
    
    // ignore white space
    while (str[i] == ' ') { 
        i++
    } 
    
    // deal with signage
    while(str[i] === '-' || str[i] === '+'){
        if(sign === -1 || sign === 1){
            return digit;
        }
        
        if(sign === 0){
            sign = 1 * (str[i] + 1)
            i++
        }
    }
    
    while(str[i] >= '0' && str[i] <= '9'){
        if(sign === 0){
            sign = 1
        }
        
        digit = (str[i] - '0')
        
        place_value = place_value * 10 + digit
        
        if(place_value >= INT_MAX){
            if(sign === 1){
                return INT_MAX
            }else{
                return place_value == INT_MAX ? INT_MIN + 1 : INT_MIN
            }
        }
        
        i++
    }
    
    // if the counter wasn't moved or a sign wasn't chosen
    if(i === 0 || sign === 0 || place_value === 0){
        return 0
    }
    
    return place_value * sign
};
