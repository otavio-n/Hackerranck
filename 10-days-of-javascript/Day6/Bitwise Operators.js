function getMaxLessThanK(n, k) {
    
    var max = 0;
    var current = 0;
    
    for(let i = 1; i < n; i++) {
        for(let j = i+1; j<= n; j++) {
            current = i & j;
            
            if(current < k && current > max) {
                max = current;
            }
        }
    }
    
    return max;   

}