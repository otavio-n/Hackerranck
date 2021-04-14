/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiouAEIOU';
    const mapVowels = {};
    for(let j = 0; j < vowels.length; j++){
        mapVowels[vowels[j]] = true;
    }
    
    for(let i = 0; i < s.length; i++){
        if(mapVowels[s[i]]){
            console.log(s[i]);
        }
    }
    for(let i = 0; i < s.length; i++){
        if(!mapVowels[s[i]]){
            console.log(s[i]);
        }
    }
}