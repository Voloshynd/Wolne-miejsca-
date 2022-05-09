const coupeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; 
function getCoupeNumber(providedNumber) {
    if (!Number.isInteger(providedNumber) || typeof(providedNumber) !== 'number'){
        console.log("Wystapil blad");
        return
    } else {
for(number of coupeNumbers){
    if (providedNumber > 16 || providedNumber <= 0){
        console.log("Takich miejsc nie istnieje")
        return 
    } else if (number == providedNumber){
        console.log(`Mijsce numer: ${providedNumber} jest wolne`);
        return
            }
        }
    }
}

getCoupeNumber(5); 