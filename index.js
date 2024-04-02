// code your solution here
// Define the superbowlWin function
function superbowlWin(records) {
    // Use the find method to look for a win ("W") in the records array
    const winRecord = records.find(record => record.result === "W");
    
    // If a win is found, return the year of the win
    // If no win is found, return undefined
    return winRecord ? winRecord.year : undefined;
}

