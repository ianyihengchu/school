// Part 1: Hospital Data Structure
let hospital = {
    name: "City General Hospital",
    patients: [
        {
            id: "P001",
            fullName: "John Doe",
            dateOfBirth: "1985-06-15",
            symptoms: ["Fever", "Cough", "Fatigue"]
        },
        {
            id: "P002",
            fullName: "Jane Smith",
            dateOfBirth: "1992-03-22",
            symptoms: ["Headache", "Nausea", "Dizziness"]
        },
        {
            id: "P003",
            fullName: "Emily Johnson",
            dateOfBirth: "1978-11-12",
            symptoms: ["Shortness of breath", "Chest pain"]
        }
    ]
};

// Function to display patient information in the console
function showPatients(hospital) {
    console.log(`Hospital Name: ${hospital.name}`);

    for (let i = 0; i < hospital.patients.length; i++) {
        let patient = hospital.patients[i];

        console.log(`\nPatient ID: ${patient.id}`);
        console.log(`Full Name: ${patient.fullName}`);
        console.log(`Date of Birth: ${patient.dateOfBirth}`);
        console.log(`Symptoms:`);

        // Use a loop to print each symptom
        for (let j = 0; j < patient.symptoms.length; j++) {
            console.log(`- ${patient.symptoms[j]}`);
        }
    }
}

// Function to get a random patient ID and log it to the console
function getRandomPatientId(patients) {
    let randomIndex = Math.floor(Math.random() * patients.length);
    console.log(`Random Patient ID: ${patients[randomIndex].id}`);
}

// Execute the functions on page load
showPatients(hospital);
getRandomPatientId(hospital.patients);
