/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps: number, path: string): number {
    // Write your code here
    let altitude: number = 0;
    let inValley: boolean = false;
    let valleyCounter: number = 0;
    
    for(let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            altitude++;
        } else {
            altitude--;
        }
        
        if (altitude === -1) {
            inValley = true;
        } else if (altitude === 0 && inValley === true) {
            inValley = false;
            valleyCounter++;
        }
    }
    
    return valleyCounter;

}