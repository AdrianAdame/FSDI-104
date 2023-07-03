let petSalon = {
    name  : "The Fashion Pet",
    phone : "444-444-4444",
    address : {
        street : "Palm ave.",
        number : "262",
        zip    : "22000"
    },
    hours : {
        open  : "9:00 am",
        close : "5:00 pm"
    },
    pets : [
        {
            name: "Scooby",
            age: 60,
            gender: "Male",
            service: "Grooming"
        },
        {
            name: "Speedy",
            age: 80,
            gender: "Male",
            service: "Grooming"
        },
        {
            name: "Max",
            age: 45,
            gender: "Male",
            service: "Grooming"
        }
    ]
}

function displayPetNames() {
    let div = document.getElementById("petNames");

    div.innerHTML = "";

    for(let i = 0; i < petSalon.pets.length; i++){
        div.innerHTML += `<p>Pet Name: ${petSalon.pets[i].name}</p>`
    }
}

function displayNumberPets() {
    let div = document.getElementById("petNumber");

    div.innerHTML = `<p>Number of pets: ${petSalon.pets.length}</p>`;
}

function displaySalonInfo(){
    let div = document.getElementById("salonInfo")

    div.innerHTML = ""

    div.innerHTML += `<p>Welcome to ${petSalon.name}`

    div.innerHTML += `<p>Phone number: ${petSalon.phone}</p>`
}

function init(){
    //Hook events

    //Execute functions
    displaySalonInfo();
    displayPetNames();
    displayNumberPets();
}

window.onload = init;