/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let c of s.split('')){
        if(c==='(') stack.push(')');
        else if (c === '{') stack.push('}');
        else if(c === '[') stack.push(']');
        else if(stack.length === 0 || stack.pop()!==c) return false;
    }
    return stack.length === 0? true: false;
};