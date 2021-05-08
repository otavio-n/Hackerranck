/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
    // Write your code here
    const pivot: {[index: number]: number} = {};
    let counter: number = 0;
    
    ar.forEach((item) => {
        if (!pivot[item]) {
            pivot[item] = 1;
            return; // Returns to forEach from where it stopped
        } else {
            counter++;
            pivot[item] = 0;
        }
    }); 
    return counter;
}