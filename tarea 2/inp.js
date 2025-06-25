/*const options = {
  method: "GET",
  Headers: {
    'X-RapidAPI-Key': '71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5',
    'X-RapidAPI-host': 'community-open-weather-map.p.rapidapi.com'
  }
};

fetch(
  "https://open-weather-map-graphql.p.rapidapi.com/graphql/open-weather-map",
  options
);
this((res) => res.json());
this((Response) => {
  console.log(Response);
});*/

const apiUrl = "https://rickandmortyapi.com/api/character";
function makecard (character){
    const{name, status, image} = character;
    const cardscontainer = document.querySelector(".card-container");

    const title = document.createElement("h5");
    title.textContent = name

    const characterstatus = document.createElement("p")
    characterstatus.textContent = status;
    if(status == "Alive") characterstatus.style.color = "green";
    else characterstatus.style.color = "gray";

    const charactersImage = document.createElement("img");
    charactersImage.src = image;
    charactersImage.width = 200;

    const card = document.createElement("div");
    card.appendChild(title);
    card.appendChild(charactersImage);
    card.appendChild(characterstatus);
    card.style.backgroundColor = "blue"

    cardscontainer.appendChild(card);
}

async function getcharacters () {
    try {
        const response = await fetch(apiUrl);
        const character = await response.json();

        console.log(results);
    }catch (error) {
        console.error(error);
    };
    

}

getcharacters();