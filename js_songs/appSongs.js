import {addSongs} from "./songsManager.js"

window.onload = () => {
    init();
}

const init = () => {
    let myUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=ce8f9722b6msh94405721b52c68fp1df259jsnf3ce1148d201&q=queen";
    doApi(myUrl);
    viewEvents();
}

const viewEvents = () => {
    document.querySelector("#btn_search").addEventListener("click",() => {
        const valSearch = document.querySelector("#id_input").value;
        if (valSearch) {
            const myUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=ce8f9722b6msh94405721b52c68fp1df259jsnf3ce1148d201&q=${valSearch}`;
            doApi(myUrl);
        }
    })
}


const doApi = (_url) => {
    fetch(_url)
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        addSongs(data.data);
    })
}