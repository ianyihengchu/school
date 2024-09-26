//Part1:
const hospital = {
    name: "Mississauga Hospital",
    patient: [
        {
            id: "01",
            fullName: "John",
            dateOfBirth: "1999-1-1",
            symptoms: ["rhinitis", "concussion"]
        },
        {
            id: "02",
            fullName: "Ian",
            dateOfBirth: "1996-1-1",
            symptoms: ["lowback_pain", "fever"]
        },
        {
            id: "03",
            fullName: "Roy",
            dateOfBirth: "1995-1-1",
            symptoms: ["headache", "stomachache"]
        }
    ]
};



//Part2:
function showPatients(hospital) {
    const patientsListDiv = document.getElementById("patientsList");

    let hospitalName = document.createElement("h1");
    hospitalName.textContent = hospital.name;
    patientsListDiv.appendChild(hospitalName);
    console.log(hospitalName);

    for (var i = 0; i < hospital.patient.length; i++) {
        const patient = hospital.patient[i];

        const patientInfo = document.createElement("h2");
        patientInfo.textContent = patient.fullName + ", " + patient.dateOfBirth;
        patientsListDiv.appendChild(patientInfo);
        console.log(patientInfo);

        const symptomsList = document.createElement("ul");
        for (var j = 0; j < patient.symptoms.length; j++) {
            const symptom = patient.symptoms[j];
            const symptomItem = document.createElement("li");
            symptomItem.textContent = symptom;
            symptomsList.appendChild(symptomItem);
        }
        patientsListDiv.appendChild(symptomsList);
        console.log(symptomsList);
    }
}

showPatients(hospital);



//Part3:
function getPatient(patient) {
    let randomNumber = Math.floor(Math.random() * patient.length);
    let chosenPatient = patient[randomNumber];
    return chosenPatient.id;
}

let randomPatientId = getPatient(hospital.patient);
console.log("randon_Patient_ID:" + randomPatientId);