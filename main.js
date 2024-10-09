let distance = 1500
let budget = 175
let costOfFuel = 3


// define speed
let mpg55 = 55 // defines the amount of speed
let mpg60 = 60
let mpg75 = 75

// define the fuel/gal
let df55 = 30
let df60 = 28
let df75 = 23

//cal gallon for each of the speed
let fuelNeeded55 = distance / mpg55;
let fuelNeeded60 = distance/ mpg60
let fuelNeeded75 = distance/ mpg75

// fuel for each speed
let fuelExpense55 = fuelNeeded55 * costOfFuel;
let fuelExpense60 = fuelNeeded60 * costOfFuel;
let fuelExpense75 = fuelNeeded75 * costOfFuel;


// trip duration
let duration55 = distance / mpg55
let duration60 = distance / mpg60
let duration75 = distance / mpg75

// budget for each speed

let budget55 = fuelExpense55 <= budget;
let budget60 = fuelExpense60 <= budget;
let budget75 = fuelExpense75 <= budget;


// Log results of the cal using string can
console.log(`For 55 mpg:
    Gallons need: ${fuelNeeded55}
    fuel cost: ${fuelExpense55}
    Trip Duration: ${duration55}
    budget: ${budget55 ? "yes" : "No"}`);
    

    console.log(`For 60 mpg:
        Gallons need: ${fuelNeeded60}
        fuel cost: ${fuelExpense60}
        Trip Duration: ${duration60}
        budget: ${budget60 ? "yes" : "No"}`);


     console.log(`For 75 mpg:
            Gallons need: ${fuelNeeded75}
            fuel cost: ${fuelExpense75}
            Trip Duration: ${duration75}
            budget: ${budget75 ? "yes" : "No"}`);