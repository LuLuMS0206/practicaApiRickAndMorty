
const title = document.getElementById('title') //me creo una variable para coger el id de html para el titulo
const root = document.getElementById('root'); // otra variable para el cuerpo de la web
let url = 'https://rickandmortyapi.com/api/character';

let arrayRick = [];

const rickyMorty = document.createElement('h1');
rickyMorty.innerText = 'Rick and Morty';
title.appendChild(rickyMorty);

const writeTextInHtml = (content) => {  //funcion para mostar en hmtl
    const target = document.createElement('div');
    const title = document.createElement(`h4`)
    title.innerText = content.getname();
    target.appendChild(title)

    const img = document.createElement('img')
    img.src = content.getimage();
    target.appendChild(img)

    const specie = document.createElement(`p`)
    specie.innerText = content.getspecies();
    target.appendChild(specie)
    root.appendChild(target)
}

const fetchResults = (url) => { //funcion para obtener los datos de la API
    const request = fetch(url)
        .then((response) => {
            if (response.ok) {
                response.json().then((jsonData) => {
                    arrayRick = jsonData.results;
                    console.log(arrayRick);
                    let content = [];
                    arrayRick.forEach(arrayRick => {
                        const user = new User(arrayRick.name, arrayRick.image, arrayRick.species);
                        console.log(user);
                        content.push(user);

                    });
                    console.log(content.length)
                    for (let i = 0; i < content.length; i++) {
                        writeTextInHtml(content[i]);

                    }
                })

                    .catch((error) => alert('Hubo  un error al cargar la API'));
            }

        })
        .catch((error) => alert('Error en la API'));
}

fetchResults(url); // llamo a la funcion de la url