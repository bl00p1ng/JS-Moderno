const player = {
    songName: '',
    play: id => console.log(`Reproduciendo canción con el id ${id}`),
    pause: () => console.log('Pausando...'),
    delete: id => console.log(`Borrando canción con el id ${id}`),
    createPlaylist: name => console.log(`Se ha creado la Playlist: ${name}`),
    playPlaylist: name=> console.log(`Reproduciendo la Playlist: ${name}`),

    set newSong(songName) {
        this.songName = songName;
    },
    get getSongName() {
        console.log(this.songName);
    }
};

player.newSong = 'Enter Sandman';
player.getSongName;

player.play(30);
player.play(20);
player.pause();
player.delete(20);
player.createPlaylist('Rock cañero');
player.playPlaylist('Rock cañero');