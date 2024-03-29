# atoi
Algorithm to convert a string of valid integral characters into a number

## The Problem
Now, computers ar always solving problems. When building out any solution to a problem, we need to take several things to mind such as the form of the problem and its possible use cases (or execution context). In this particular exercise, we wish to convert data from one form to the other specifically from strings to valid integers. We are also going to make use of the JavaScript programming language.

Our algorithm will have some assumptions (as all algorithm do). However, this assumption is based on the use cases as well as the form. The form of the problem is a conversion problem which requires us to inspect (or parse) the input thoroughly. We also need to make assumptions about finite resources at our disposal e.g.

- Time (How much time it will take to provide the solution)
- Space (How much memory it will use)



## The Solution

The solution is very simple. It goes on to inspect each character in the input string and picks only digit and sign characters ('+' , '-') for the conversion step. We need to ignore whitespace characters as well as non-whitespce characters that are not digit or signs. We use a simple shortcut to convert a single digit character to its number equivalent. [Here is the runtime performance details](https://leetcode.com/submissions/detail/262340022/)

> Find the code for the solution below:

```js
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

```

## Complexity Analysis
The Runtime Complexity for our solution is O(n) because the time it takes to convert the string of integral characters into a valid number depends on the size of the input (string).

The Space Complexity for our solution is also O(n) because the amount of memory it takes is also proportional to the size of the input (string).
