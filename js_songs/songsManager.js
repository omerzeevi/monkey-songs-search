import Song from "./songsClass.js"

export const addSongs = (_ar) => {
    document.querySelector("#id_row").innerHTML = "";

    if(_ar) {
        _ar.map(item => {
            const { album, artist, title, preview, link } = item;
            const song = new Song("#id_row", album.cover, artist.name, title, preview, link);
            song.render();
        })
    }
}