import * as service from "../service/Playlist.js";

const addSongtoPlaylist = (req, res, next) => {
    try {
        for (const key in req.body){
            if (!req.body[key]){
                throw new Error("There is empty data...")
            }
        }
        const { title, artist, url } = req.body;

        const artists = service.splitArtists(artist)
        const song = service.addSong(title, artists, url)
        service.addSongtoPlaylist(song)

        return res.status(201).json({
            message: 'Song added successfully...',
            data: song
        });
    } catch (error) {
        next(error)
    }
}

const getPlaylist = (req, res, next) =>{
    try {
        const playlist = service.getPlaylist()

        return res.status(200).json({
            message:"Playlist retrieved successfully",
            data:playlist
        })
    } catch (error) {
        next(error)
    }
}

const playSong = (req, res) => {
    try{
        const index = req.params.songIdx
        const song = service.playSong(parseInt(index))

        return res.status(200).json({
            message: 'Song retrieved successfully...',
            data: song,
        });
    }catch(error){
        return res.status(404).json({
            message: error.message
        })
    }
}

const mostPlayed = (req, res, next) => {
    try {
        const mostPlayedPlaylist = service.getMostPlayed()
        console.log(mostPlayedPlaylist)
        return res.status(200).json({
            message:"Playlist retrieved successfully",
            data:mostPlayedPlaylist
        })
    } catch (error) {
        next(error)
    }
}


// Middleware Error
const emptyHandler = ((err, req, res, next) =>{
    res.status(500).json({
        message: err.message
    })
})

export default {
    addSongtoPlaylist, getPlaylist, 
    emptyHandler, playSong, mostPlayed
}