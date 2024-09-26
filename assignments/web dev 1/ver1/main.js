// P1 hospital and patients data

let hospital = {
    name: "Oakville Memory Hospital",
    patients: [
        {
            id: "01",
            fullName: "Cecilia Dong",
            dateOfBirth: "1996-10-25",
            symptoms: ["vomiting", "nausea", "frequent urination"]
        },
        {
            id: "02",
            fullName: "Ian Chu",
            dateOfBirth: "1995-11-12",
            symptoms: ["blurry vision", "weight loss", "numbness in the hand"]
        },
        {
            id: "03",
            fullName: "Bryan Long",
            dateOfBirth: "1989-09-19",
            symptoms: ["itchy nose", "watery eyes","sneezing"]
        }
    ]
};

// P2 patients information function

function showPatients(hospital) {

    const patientsListDiv = document.getElementById("patientsList");

    let hospitalName = document.createElement("h1");
    hospitalName.textContent = hospital.name;
    patientsListDiv.appendChild(hospitalName);
    console.log(hospitalName);

 
    hospital.patients.forEach(patient => {

        let symptomsList = document.createElement("ul");

        let patientHeader = document.createElement("h2");
        patientHeader.textContent = `${patient.fullName}, ${patient.dateOfBirth}`;
        patientsListDiv.appendChild(patientHeader);
        console.log(patientHeader);
        console.log(symptomsList);

       
        patient.symptoms.forEach(symptom => {
            let symptomItem = document.createElement("li");
            symptomItem.textContent = symptom;
            symptomsList.appendChild(symptomItem);

        });

        patientsListDiv.appendChild(symptomsList);
    });
}





// P3 random patient id function

function getPatient(patients) {
    let randomIndex = Math.floor(Math.random() * patients.length);
    return patients[randomIndex].id;
}


showPatients(hospital);


let randomId = getPatient(hospital.patients);
console.log(`Random Patient ID: ${randomId}`);
