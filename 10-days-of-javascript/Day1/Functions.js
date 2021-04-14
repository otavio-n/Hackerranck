/*
 * Create the function factorial here
 */
function factorial(n){
    for(let i = n-1; i > 0; i--){
        n = n*i;
    }
    return n;
}