//----------------------GET API DATA-------------------//
const API = 'https://rickandmortyapi.com/api/character';

const getData = async(url) =>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.results);
        printData(data)
    }
    catch(error){
        throw error
    }

}

const  printData = (data) => {
    let html ='';
    data.results.forEach( char => {
        html += '<div class ="col mt-5" >';
            html += '<div class="card" style="width: 13rem;">'
                html += `<img src="${char.image}" class="card-img-top" alt="...">`
                html += '<div class="card-body">'
                    html += `<h5 class="card-title">${char.name}</h5>`
                    html += `<p class="card-text">Genero:${char.gender}</p>`
                    html += `<p class="card-text">Especie:${char.species}</p>` 
                html += '</div>'
            html += '</div>'
        html += '</div>'
    });
    document.getElementById('cards-Char').innerHTML = html
}
getData(API)