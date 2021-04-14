/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const a = expressions[0];
    const p = expressions[1];
    
    var x = (p + Math.sqrt(Math.pow(p,2) - 16*a))/4;
    var y = (p - Math.sqrt(Math.pow(p,2) - 16*a))/4;
    
    [x, y] = [x, y].sort();
    return [x, y];
}