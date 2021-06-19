class Song {
    constructor(_parent, _image, _band, _song, _listen, _store) {
        this.parent = _parent;
        this.image = _image;
        this.band = _band;
        this.song = _song;
        this.listen = _listen;
        this.store = _store;
    }

    render() {
        const newDiv = document.createElement("div");
        newDiv.className = "border d-flex align-items-center m-2 pb-2 pt-2 w-100";
        document.querySelector(this.parent).append(newDiv);

        newDiv.innerHTML += `<img class="col-1" src="${this.image}" alt="${this.band}">
                <h6 class="col-2 text-white">${this.band}</h6>
                <h6 class="col-4 text-white">${this.song}</h6>
                <audio src="${this.listen}" controls class="col-3">Play Song</audio>
                <a href="${this.store}" class="col-2 text-white" target="blank">Go To Store</a>`
    }

}

export default Song;