function checkAdmissionStatus() {
	const marksInput = document.getElementById("marksInput");
	const marks = parseFloat(marksInput.value);

	if (isNaN(marks) || marks < 0) {
		alert("Invalid marks. Please enter a valid number.");
		return;
	}

	let admissionStatus = "";

	if (marks < 50) {
		admissionStatus = "Admission Application Rejected";
	} else if (marks >= 50 && marks < 70) {
		admissionStatus = "Acceptable to admit";
	} else if (marks >= 70 && marks < 90) {
		admissionStatus = "Good to admit";
	} else {
		admissionStatus = "Outstanding to admit";
	}

	document.getElementById("statusText").textContent = admissionStatus;
}
