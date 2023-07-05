//Function to display pet names
function displayPetNames() {
    let div = document.getElementById("petNames");

    div.innerHTML = "";

    for(let i = 0; i < petSalon.pets.length; i++){
        div.innerHTML += `<p>Pet Name: ${petSalon.pets[i].name}</p>`
    }
}

//Function to display number of registered pets
function displayNumberPets() {
    let div = document.getElementById("petNumber");

    div.innerHTML = petSalon.pets.length;
}

//Functino to display petSalon Information
function displaySalonInfo(){
    let div = document.getElementById("salonInfo")

    div.innerHTML = ""
    div.innerHTML += `<p>Welcome to ${petSalon.name}`
    div.innerHTML += `<p>Phone number: ${petSalon.phone}</p>`
}

//Function to display current registered pets
function displayCards(){
    let cards = "";
    
    //Travel the array
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        let icon_selected = "";

        switch(pet.type){
            case "Dog":
                icon_selected = "./assets/img/dog-icon.png";
                break;
            case "Cat":
                icon_selected = "./assets/img/cat-icon.png";
                break;
            case "Bird":
                icon_selected = "./assets/img/bird-icon.png";
                break;
            default:
                icon_selected = "";
        }

        //Create template of the card
        cards += `
            <div class="card">
                <div class="icon">
                    <img src=${icon_selected} alt="icon-${pet.type}" srcset="">
                </div>
                <div class="content">
                    <div id="details" class="details">
                    <p>Name: <span class="bold-italic">${pet.name}</span></p>
                    <p>Gender: <span class="bold-italic">${pet.gender}</span></p>
                    <p>Breed: <span class="bold-italic">${pet.breed}</span></p>
                    <p>Service: <span class="bold-italic">${pet.service}</span></p>
                    </div>
                </div>
            </div>
        `;
    }

    //Insert the cards into the html
    document.getElementById("pets").innerHTML = cards;
}

//Function to display pets in table form
function displayTable(){
    const table = document.getElementById("pets-t")

    let temp = "";

    //Travel the array
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        let icon_selected = "";

        switch(pet.type){
            case "Dog":
                icon_selected = "./assets/img/dog-icon.png";
                break;
            case "Cat":
                icon_selected = "./assets/img/cat-icon.png";
                break;
            case "Bird":
                icon_selected = "./assets/img/bird-icon.png";
                break;
            default:
                icon_selected = "";
        }

        //Create template of the card
        temp += `
        <tr id="${i}">
            <td><img src="${icon_selected}" alt="${pet.type}" style="width:52px;height:52px;"></td>
            <td>${pet.name}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>
                <div class="flex">
                    <button onclick="deletePet(event)" class="btn-primary">Delete</button>
                    <button onclick="editPetInformation(event)" class="btn-primary">Edit</button>
                </div>
            </td>
        </tr>
        `;
    }

    table.innerHTML = temp;
}

function deletePet(event){

    const index = event.target.parentNode.parentNode.parentNode.id;
    petSalon.pets.splice(index, 1)

    displayCards();
    displayNumberPets();
    displayTable();
}

function editPetInformation(event){
    const index = event.target.parentNode.parentNode.parentNode.id;
    let pet = petSalon.pets[index];
}