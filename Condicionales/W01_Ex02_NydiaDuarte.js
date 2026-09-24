const age = 0;

if (age < 0) {
    console.error("Error: Cannot be less than zero");
} else if (age < 3) {
    console.log("Baby");
} else if (age < 11) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}   