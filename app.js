import express from 'express';
import songsController from './controllers/playlistController.js'
import bodyParser from 'body-parser'

const PORT = 3000
const app = express();
app.use(bodyParser.json());


// Add a song to Playlist
app.post('/playlist', songsController.addSongtoPlaylist)

// Get a song from Playlist
app.get('/playlist', songsController.getPlaylist)

//  Get Most Played song from Playlist
app.get('/playlist/mostplayed', songsController.mostPlayed)

//  Play Song from Playlist
app.get('/playlist/:songIdx', songsController.playSong)



// Middleware Error
app.use(songsController.emptyHandler)


app.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`))
