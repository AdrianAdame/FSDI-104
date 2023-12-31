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
    pets : []
}

let c = 0;
let inputType = document.getElementById("txtType");
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender= document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputContact = document.getElementById("txtContact");


function Pet(name, age, gender, breed, service, type, contact){

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
    this.contact = contact

    this.id = c++;
}

//Function to validate pet parameters
function isValid(aPet){
    let isValid = true;

    if(aPet.name === ""){
        isValid = false;

        inputName.classList.remove("is-valid");
        inputName.classList.add("is-invalid");
    }else{
        inputName.classList.remove("is-invalid");
        inputName.classList.remove("is-valid");
    }

    if(aPet.age === ""){
        isValid = false;
        
        inputAge.classList.remove("is-valid");
        inputAge.classList.add("is-invalid");
    }else{
        inputAge.classList.remove("is-invalid");
        inputAge.classList.remove("is-valid");
    }

    if(aPet.gender === ""){
        isValid = false;
        
        inputGender.classList.remove("is-valid");
        inputGender.classList.add("is-invalid");
    }else{
        inputGender.classList.remove("is-invalid");
        inputGender.classList.remove("is-valid");
    }

    if(aPet.breed === ""){
        isValid = false;
        
        inputBreed.classList.remove("is-valid");
        inputBreed.classList.add("is-invalid");
    }else{
        inputBreed.classList.remove("is-invalid");
        inputBreed.classList.remove("is-valid");
    }

    if(aPet.service === ""){
        isValid = false;
        
        inputService.classList.remove("is-valid");
        inputService.classList.add("is-invalid");
    }else{
        inputService.classList.remove("is-invalid");
        inputService.classList.remove("is-valid");
    }

    if(aPet.type === ""){
        isValid = false;
        
        inputType.classList.remove("is-valid");
        inputType.classList.add("is-invalid");
    }else{
        inputType.classList.remove("is-invalid");
        inputType.classList.remove("is-valid");
    }

    if(aPet.contact === ""){
        isValid = false;
        
        inputContact.classList.remove("is-valid");
        inputContact.classList.add("is-invalid");
    }else{
        inputContact.classList.remove("is-invalid");
        inputContact.classList.remove("is-valid");
    }

    return isValid
}

//Function that clears the form
function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
}

//Function to register a pet into the array
function register(){
    let pet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputType.value, inputContact.value);

    if(isValid(pet)){
        petSalon.pets.push(pet);
        alert("Pet registered successfully!");
        displayNumberPets();
        displayCards();
        displayTable();
        clearForm();
    }
}

function init(){
    //Dummy data initialization
    let Scooby = new Pet("Scooby", 36, "male", "Dane", "Nails", "Dog", "6645716362")
    let Scrappy = new Pet("Scrappy", 36, "male", "Mixed", "Nails", "Cat", "6645716362")

    petSalon.pets.push(Scooby, Scrappy)

    //Hook events


    //Execute functions
    //displaySalonInfo();
    //displayPetNames();
    displayNumberPets();
    displayCards();
    displayTable();
}

window.onload = init;