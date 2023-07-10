const submit = document.querySelector(".form-submit");

async function fetchMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function buscarFilmes(e) {
    e.preventDefault();
    const filme = document.querySelector(".form-input").value;
    const url = `https://www.omdbapi.com/?apikey=e341acff&s=${filme}`;
    const data = await fetchMovies(url);
    
    const ul = document.querySelector("#movies");
    let content = ""
    for (let i = 0; i < data.Search.length; i++) {
        content += `
            <li class="app-movies-all-card">
                <figure class="app-movies-all-figure">
                    <img class="app-movies-all-thumb" src="${data.Search[i].Poster}" />
                </figure>
                <legend class="app-movies-all-legend">
                    <span class="app-movies-all-year">${data.Search[i].Year}</span>
                    <h2 class="app-movies-all-title">${data.Search[i].Title}</h2>
                </legend>
            </li>
            `
    }
    ul.innerHTML = content;

}

submit.addEventListener("click", buscarFilmes);