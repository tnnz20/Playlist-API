import * as service from "../service/Playlist.js";

const addSongtoPlaylist = (req, res, next) => {
    try {
        const { title, artist, url } = req.body;
        
        const song = service.addSong(title, artist, url)
        const result = service.addSongtoPlaylist(song)

        return res.status(201).json({
            message: 'Song added successfully...',
            data: result
        });
    } catch (error) {
        next(error)
    }
}

const getPlaylist = (_, res, next) =>{
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

const playSong = (req, res, next) => {
    try{
        const index = req.params.idx
        const play = service.playSong(parseInt(index))

        return res.status(200).json({
            message: 'Song retrieved successfully...',
            data: play,
        });
    }catch(error){
        next(error)
    }
}

const mostPlayed = (_, res, next) => {
    try {
        const mostPlayedPlaylist = service.getMostPlayed()
        return res.status(200).json({
            message:"Playlist retrieved successfully",
            data:mostPlayedPlaylist
        })
    } catch (error) {
        next(error)
    }
}



export { 
    addSongtoPlaylist, 
    getPlaylist,
    playSong,
    mostPlayed
}