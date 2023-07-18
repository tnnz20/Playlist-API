import Songs  from "../models/Songs.js";
import Playlists  from "../models/Playlist.js"


const Playlist = new Playlists()

function addSong(title, artists, url){
    Playlist.songs.forEach(song => {
        if (title === song.title){
            throw new Error ('Title already exists...')
        }
    })
    const Song = new Songs(title, artists, url)
    return Song
}

function addSongtoPlaylist(song){
    Playlist.songs.push(song)
}

function getPlaylist(){
    const playlist = Playlist.songs
    if (playlist.length < 1){
        throw new Error('The playlist is still empty...')
    }
    return playlist
}

function getMostPlayed(){
    const playlist = Playlist.songs
    if (playlist.length < 1){
        throw new Error('The playlist is still empty...')
    }
    return playlist.sort((a, b) => b.totalPlay - a.totalPlay)
}

function playSong(index){
    if (Playlist.songs[index]){
        Playlist.songs[index].totalPlay++
        return Playlist.songs[index]
    }
    throw new Error('Song Not Found...')
}

function splitArtists(artist){
    const trimArtists = artist.trim().split(",")
    const artists = trimArtists.map(artist => artist.trim())
    return artists
}



export { 
    addSong, addSongtoPlaylist, getPlaylist, 
    splitArtists, playSong, getMostPlayed
}

