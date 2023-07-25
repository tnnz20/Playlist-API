import Songs  from "../models/Songs.js";
import Playlists  from "../models/Playlist.js"
import CustomError from "../utils/CustomError.js"
import splitString  from "../utils/SplitString.js"

const playlists = new Playlists()


function addSong(title, artists, url){
    const playlist = playlists.getSongs()

    if (!title || !artists || !url){
        throw new CustomError("There is empty data...", 400)
    }

    playlist.forEach(song => {
        if (title === song.title){
            throw new CustomError('Title already exists...', 400)
        }
    })
    const artist = splitString(artists)
    const Song = new Songs(title, artist, url)
    return Song
}

function addSongtoPlaylist(song){
    playlists.addSong(song)
}

function getPlaylist(){
    const playlist = playlists.getSongs()

    if (playlist.length < 1){
        throw new CustomError('The playlist is still empty...', 400)
    }
    return playlist
}

function playSong(index){
    const playedSong = playlists.playSong(index)
    
    if(!playedSong){
        throw new CustomError('Song Not Found...', 400)
    }
    playedSong.totalPlay++
    return playedSong
}

function getMostPlayed(){
    const playlist = playlists.getMostPlayed()
    if (playlist.length < 1){
        throw new CustomError('The playlist is still empty...', 400)
    }
    return playlist
}

export { 
    addSong, addSongtoPlaylist, 
    getPlaylist, playSong, getMostPlayed
}

