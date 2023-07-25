class Playlists {
    constructor(){
        this.songs = []
    }
    addSong(song){
        this.songs.push(song)
    }

    getSongs(){
        return this.songs
    }

    playSong(index){
        return this.songs[index]
    }

    getMostPlayed(){
        return this.songs.sort((a,b) => b.totalPlay - a.totalPlay)
    }
}

export default Playlists