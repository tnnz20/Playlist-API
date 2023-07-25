import { Router } from "express";
import * as playlistController from './../controllers/playlistController.js';

const router = Router()

router.route('/')
    .get(playlistController.getPlaylist)
    .post(playlistController.addSongtoPlaylist)

router.route('/play/:idx').get(playlistController.playSong)

router.route('/mostplayed').get(playlistController.mostPlayed)

export default router