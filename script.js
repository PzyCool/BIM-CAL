function calculateBIM() {
    let personName = document.getElementById("name").value;
    let weightKg = parseFloat(document.getElementById("weight").value);
    let heightM = parseFloat(document.getElementById("height").value);


    if (!personName || isNaN(weightKg) || isNaN(heightM) || weightKg <= 0 || heightM <= 0) {
        alert("Please enter valid name, weight, and height.");
        return;
    }

   

    let heighSquared = heightM * heightM;
    let bim = weightKg / heighSquared;
    

    let isUnderweight = bim < 18.5;
    let isNormalweight = bim >= 18.5 && bim < 25;
    let isOverweight = bim >= 25;

    let isHighRisk = isOverweight || weightKg > 90;
    if ( isHighRisk)(
        window.alert("Sorry you are Over Weight! Kindly go workout!")
    )
    console.log("Name: " + personName);
    console.log("BIM: " + bim.toFixed(2));
    console.log("Underweight: " + isUnderweight);
    console.log("Normal weight: " + isNormalweight);
    console.log("Overweight: " + isOverweight);
    console.log("High Risk Alert: " + isHighRisk);
}
