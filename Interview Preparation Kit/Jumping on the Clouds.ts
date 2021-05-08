/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c: number[]): number {
    // Write your code here
    let jumps: number = 0;
    let cloudIndex: number = 0;
    
    while (cloudIndex < c.length - 1) {
        if (c[cloudIndex + 2] === 0) {
            cloudIndex += 2;
        } else {
            cloudIndex += 1;
        }
        jumps++;
    }

    return jumps;
}