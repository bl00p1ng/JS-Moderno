const player = {
    play: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pause: function() {
        console.log('Pausando...');
    },
    delete: function(id) {
        console.log(`Borrando canción con el id ${id}`);
    },
    createPlaylist: function(name) {
        console.log(`Se ha creado la Playlist: ${name}`);
    },
    playPlaylist: function(name) {
        console.log(`Reproduciendo la Playlist: ${name}`);
    }
};

player.play(30);
player.play(20);
player.pause();
player.delete(20);
player.createPlaylist('Rock cañero');
player.playPlaylist('Rock cañero');