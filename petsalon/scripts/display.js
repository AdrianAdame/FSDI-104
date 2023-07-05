function displayCards(){
    let cards = "";
    
    //Travel the array
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];

        //Create template of the card
        cards += `
            <div>
                <h5>Name: ${pet.name} </h5>
            </div>
        `;
    }

    //Insert the cards into the html
    document.getElementById("pets").innerHTML = cards;
}