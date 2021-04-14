function getDayName(dateString) {
    let dayName;
    // Write your code here
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const date = new Date(dateString);
    dayName = weekday[date.getDay()];
    
    return dayName;
}