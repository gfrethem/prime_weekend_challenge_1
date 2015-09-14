var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPaidOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

var claim6 = new claim("Edward Nigma", "Specialist", 1100);
initialList.push(claim6);

var claim7 = new claim("Harvey Dent", "Primary Care", 2222);
initialList.push(claim7);

var claim8 = new claim("Pamela Isley", "Specialist", 450);
initialList.push(claim8);

var claim9 = new claim("Slade Wilson", "Optical", 1250);
initialList.push(claim9);

var claim10 = new claim("Oswald Cobblepot", "Optical", 775);
initialList.push(claim10);

//function to determine percent covered
/*
Optical - covers 0%

Specialist - covers 10%

Emergency - covers 100%

Primary Care - covers 50%	
*/

function percentCovered(claim) {
	var percentageCovered = 0;

	switch(claim.visitType) {
		case "Optical":
		percentageCovered = 0;
		break;
		case "Specialist":
		percentageCovered = .10;
		break;
		case "Emergency":
		percentageCovered = 1;
		break;
		case "Primary Care":
		percentageCovered = .5;
		break;
		default:
		percentageCovered = 0; 
	}
	return percentageCovered;
}


//function to determine amount covered

function computeAmountCovered(claim) {
	claimAmountPaid = Math.round(percentCovered(claim) * claim.visitCost);

	return claimAmountPaid;
}

for (i = 0; i < initialList.length; i++) {
	var claimPayOut = computeAmountCovered(initialList[i]);
	console.log("Paid out $" + claimPayOut + " for " + initialList[i].patientName + ".");
	totalPaidOut += claimPayOut;
}

console.log("\nThe total pay out is $" + totalPaidOut + ".");