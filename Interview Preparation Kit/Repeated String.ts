/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s: string, n: number): number {
    // Write your code here
    
    let counter: number = 0;
    let countLast: number = 0;
    const lastStringLength: number = n%s.length;

    if (s.length >= n) {
        for (let i = 0; i < n; i++) {
            if (s[i] === 'a') {
                counter++;
            }
        }
        return counter;
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'a') {
                counter++;
            }
        }
        counter = counter * Math.floor(n/s.length);
    }
    
    if (lastStringLength === 0) {
        return counter;
    } else {
        for (let i = 0; i < lastStringLength; i++) {
            if (s[i] === 'a') {
                countLast++;
            }
        }
        return counter + countLast;
    }

}