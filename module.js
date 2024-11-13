function shift() {
    let start = Number(prompt("enter the start time:"));
    let ampm = prompt("is the start time am or pm:").toLowerCase();
    let end = Number(prompt("enter the end time:"));
    if (start >= 10 && ampm == "pm" && end <= 6) {
        console.log(`Night shift`);
    }
    else {
        console.log(`day shift`);
    }
}

function temp() {
    let temp = Number(prompt("enter the temprature:"));
    if (temp < 10) {
        console.log(`cold`);
    }
    else if (temp >= 10 && temp <= 25) {
        console.log(`moderate`);
    }
    else if (temp > 25) {
        console.log(`hot`);
    }
}

function discountCalculator() {
    let total = Number(prompt("enter your total amount:"));
    if (total < 100) {
        console.log(`no discount`);
    }
    else if (total > 100 && total <= 200) {
        console.log(`you get 10 % discount and the amount after discount is ${total - ((10 / 100) * total)} `);
    }
    else if (temp > 200) {
        console.log(`you get 20 % discount and the amount after discount is ${total - ((20 / 100) * total)} `);
    }
}

function elevator() {
    let people = Number(prompt("enter total number of people:"));
    let arr = [];
    for (let i = 0; i < people; i++) {
        arr[i] = Number(prompt(`enter the weight of person ${i + 1}:`));
    }
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    if (sum > 500) {
        console.log(`the elevator is overloded`);
    }
    else {
        console.log(`the elevator is not overloaded`);
    }
}

function orderValidation() {
    let order = Number(prompt("enter number of orders:"));
    if (order < 5) {
        console.log(`invalid order`);
    }
    else if (order >= 5 && order <= 10) {
        console.log(`standard order`);
    }
    else if (order > 10) {
        console.log(`bulk order`);
    }
}

function balance() {
    let user = prompt("enter your bank balance in $ :")
    if (user < 100) {
        console.log("your balance is low.")
    }
    else if (user >= 100 && user <= 500) {
        console.log("your balance is healthy.")
    }
    else {
        console.log("your balance is high.")
    }

}
function calculateShoppingBill() {
    let totalBill = 0;
    let numItems = parseInt(prompt("No of items you buy : "));
    for (let i = 0; i < numItems; i++) {
        let itemPrice = parseFloat(prompt("Enter the price of item " + (i + 1) + ":"));
        totalBill = totalBill + itemPrice;
    }
    console.log("The total bill is: $" + totalBill.toFixed(2));
}

function calculateFlightCost() {

    let basePrice = parseFloat(prompt("Enter the base ticket price:"));
    let daysInAdvance = prompt("no of days in advance : ");
    let cls = prompt("Specify your class (economy,business,premium member) : ").toLowerCase();
    let discount = 0;

    if (daysInAdvance > 30 && cls === "economy") {
        discount = basePrice * 0.05;
    }

    if (cls === "business") {
        discount = basePrice * 0.10;
    }

    if (cls === "premium member") {
        discount = basePrice * 0.15;
    }

    let finalPrice = basePrice - discount;

    console.log("The final price of your ticket is: Rs." + finalPrice.toFixed(2));
}

function vote() {
    let user = prompt("enter your age : ");
    if (user >= 18) {
        console.log("you are eligible to vote")
    }
    else {
        console.log("you are not eligible to vote")
    }

}

function trafficLightAction() {
    let lightColor = prompt("Enter the current traffic light color : ").toLowerCase();
    if (lightColor === "red") {
        console.log("Action: Stop");
    } else if (lightColor === "yellow") {
        console.log("Action: Slow Down");
    } else if (lightColor === "green") {
        console.log("Action: Go");
    } else {
        console.log("Invalid traffic light color.");
    }
}
function calculateElectricityBill() {
    let usage = parseFloat(prompt("Enter your electricity usage in kWh:"));
    let billAmount;
    if (usage <= 100) {
        billAmount = usage * 0.10;
    } else if (usage <= 200) {
        billAmount = (100 * 0.10) + ((usage - 100) * 0.15);
    } else {
        billAmount = (100 * 0.10) + (100 * 0.15) + ((usage - 200) * 0.20);
    }
    console.log("Your electricity bill is: $" + billAmount.toFixed(2));
}

function calculateWeeklyWages() {
    let hoursWorked = parseFloat(prompt("Enter the number of hours worked in a week:"));
    let hourlyRate = parseFloat(prompt("Enter your hourly rate:"));
    let totalWage;
    if (hoursWorked > 40) {
        let overtimeHours = hoursWorked - 40;
        totalWage = (40 * hourlyRate) + (overtimeHours * hourlyRate * 1.5);
    } else {
        totalWage = hoursWorked * hourlyRate;
    }
    console.log("Your total weekly wage is: $" + totalWage.toFixed(2));
}

function calculateStudentGrade() {
    let marks1 = parseFloat(prompt("Enter marks for subject 1: "));
    let marks2 = parseFloat(prompt("Enter marks for subject 2: "));
    let marks3 = parseFloat(prompt("Enter marks for subject 3: "));
    let average = (marks1 + marks2 + marks3) / 3;
    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }
    console.log("Your average is: " + average.toFixed(2) + " and your grade is: " + grade);
}

function checkStockStatus() {
    let stock = parseInt(prompt("Enter the stock quantity for the product:"));
    if (stock === 0) {
        console.log("Out of Stock");
    } else if (stock <= 10) {
        console.log("Low Stock");
    } else {
        console.log("In Stock");
    }
}

function trackGameScore() {
    let score = parseInt(prompt("Enter your current score:"));
    if (score >= 1000) {
        console.log("Congratulations! You've reached 1000 points!");
    } else if (score >= 500) {
        console.log("Congratulations! You've reached 500 points!");
    } else if (score >= 100) {
        console.log("Congratulations! You've reached 100 points!");
    } else {
        console.log("Keep playing to reach a milestone!");
    }
}

function calculateTrainFare() {

    let distance = parseFloat(prompt("Enter the distance you are traveling in kilometers:"));
    let travelClass = prompt("Enter your travel class (Economy or Business):").toLowerCase();

    let farePerKm;

    if (travelClass === "economy") {
        farePerKm = 0.5;
    } else if (travelClass === "business") {
        farePerKm = 1;
    } else {
        console.log("Invalid class.");
        return;
    }

    let totalFare = distance * farePerKm;
    alert("Your total train fare is: $" + totalFare.toFixed(2));
}

function checkLoanEligibility() {
    let monthlyIncome = parseFloat(prompt("Enter your monthly income:"));
    let creditScore = parseInt(prompt("Enter your credit score:"));
    if (monthlyIncome >= 10000 && creditScore >= 700) {
        alert("You are eligible for a loan!");
    } else {
        alert("You are not eligible for a loan.");
    }
}

function calculateMovieTicketPrice() {
    let person = prompt("Are you a student/senior.citizen : ").toLowerCase();
    let ticketPrice = 15;
    if (person === "student") {
        ticketPrice -= ticketPrice * 0.10;
    }
    if (person === "senior.citizen") {
        ticketPrice -= ticketPrice * 0.20;
    }
    console.log("The final movie ticket price is: $" + ticketPrice.toFixed(2));
}

function gameLevelUp() {
    let experiencePoints = parseInt(prompt("Enter your experience points:"));
    if (experiencePoints >= 1000) {
        alert("Congratulations! You have leveled up!");
    } else {
        alert("Keep playing! You need more points to level up.");
    }
}

function calculateFuelCost() {

    let distance = parseFloat(prompt("Enter the distance to be traveled (in kilometers):"));
    let fuelEfficiency = parseFloat(prompt("Enter your vehicle's fuel efficiency (km/liter):"));
    let fuelPrice = parseFloat(prompt("Enter the price of fuel per liter:"));
    let fuelRequired = distance / fuelEfficiency;
    let totalCost = fuelRequired * fuelPrice;
    console.log("The total fuel cost is: Rs." + totalCost.toFixed(2));
}

function calculateSeatingArrangement() {
    let students = parseInt(prompt("Enter the number of students:"));
    let seatsPerRow = parseInt(prompt("Enter the number of seats per row:"));
    let rowsNeeded = Math.ceil(students / seatsPerRow);

    console.log("You will need " + rowsNeeded + " rows.");
}

function calculateTax() {
    let income = parseFloat(prompt("Enter your annual income:"));
    let taxAmount;
    if (income < 50000) {
        taxAmount = income * 0.10;
    } else if (income <= 100000) {
        taxAmount = income * 0.20;
    } else {
        taxAmount = income * 0.30;
    }
    console.log("Your tax amount is: Rs. " + taxAmount.toFixed(2));
}

function calculateBonus() {

    let yearsOfService = parseInt(prompt("Enter the number of years you have worked:"));

    let bonusPercentage;

    if (yearsOfService >= 5 && yearsOfService <= 10) {
        bonusPercentage = 0.05;
    } else if (yearsOfService >= 10 && yearsOfService <= 20) {
        bonusPercentage = 0.10;
    } else if (yearsOfService > 20) {
        bonusPercentage = 0.15;
    } else {
        bonusPercentage = 0;
    }

    let salary = parseFloat(prompt("Enter your annual salary:"));
    let bonusAmount = salary * bonusPercentage;
    alert("Your bonus is: Rs. " + bonusAmount.toFixed(2));
}
function calculateFuelEfficiency() {
    let distance = parseFloat(prompt("Enter the distance traveled (in kilometers):"));
    let fuelUsed = parseFloat(prompt("Enter the amount of fuel used (in liters):"));
    let fuelEfficiency = distance / fuelUsed;

    console.log("Your fuel efficiency is: " + fuelEfficiency.toFixed(2) + " km/liter");
}

function internetUsageAlert() {
    let dataLimit = parseFloat(prompt("Enter your monthly data limit (in GB):"));
    let currentUsage = parseFloat(prompt("Enter your current data usage (in GB):"));
    if (currentUsage >= dataLimit) {
        console.log("Alert: You have used 100% of your data limit!");
    } else if (currentUsage >= dataLimit * 0.80) {
        console.log("Alert: You have used 80% of your data limit.");
    } else {
        console.log("You are using less than 80% of your data limit.");
    }
}

//Leet code questions 

function romanToInteger() {
    let roman = prompt("enter the roman values:");
    let arr = roman.split("");
    let sum = 0;
    let I = 1;
    let V = 5;
    let X = 10;
    let L = 50;
    let C = 100;
    let D = 500;
    let M = 1000;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'I') {
            arr[i] = I;
        }
        else if (arr[i] == 'V') {
            arr[i] = V;
        }
        else if (arr[i] == 'X') {
            arr[i] = X;
        }
        else if (arr[i] == 'L') {
            arr[i] = L;
        }
        else if (arr[i] == 'C') {
            arr[i] = C;
        }
        else if (arr[i] == 'D') {
            arr[i] = D;
        }
        else if (arr[i] == 'M') {
            arr[i] = M;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        let curr = arr[j];
        if (j + 1 < arr.length) {
            let next = arr[j + 1];
            if (curr >= next) {
                sum += curr;
            }
            else {
                sum += (next - curr);
                j++;
            }
        }
        else {
            sum += arr[j];
        }
    }
    console.log(sum);
}

function palindrome() {
    let num = Number(prompt("enter the number:"));
    let dummy = num;
    let rev = 0;
    while (dummy > 0) {
        let rem = dummy % 10;
        rev = rev * 10 + rem;
        dummy = Math.floor(dummy / 10);
    }
    if (rev === num) {
        console.log(`palindrome number`);
    }
    else {
        console.log(` not a  palindrome number`);
    }

}

function twoSum() {
    let arr = [];
    let n = Number(prompt("entee the number of elements you want to add in the array:"));
    for (let i = 0; i < n; i++) {
        arr[i] = Number(prompt(`enter the value for index ${i}:`));
    }
    let target = Number(prompt("enter the target value:"));
    for (let j = 0; j < arr.length; j++) {
        for (let k = 1; k < arr.length; k++) {
            if (arr[j] + arr[k] === target) {
                console.log([j, k]);
            }
        }
    }
}
function reverseInteger() {
    let num = Number(prompt("enter the number to reverse:"));
    let dummy = num;
    let rev = 0;
    while (dummy > 0) {
        let rem = dummy % 10;
        rev = rev * 10 + rem;
        dummy = Math.floor(dummy / 10);
    }
    console.log(`the reverse of the entered number is:${rev}`);
}