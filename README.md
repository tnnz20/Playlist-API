# Playlist - API

This repository serves simple Playlist API using `Express.js`

## API Endpoint

|Method|Path|Description|
|---|---|---|
|`GET`|/playlist| Get a song from Playlist|
|`GET`|/playlist/mostplayed| Get Most Played song from Playlist|
|`GET`|/playlist/1|Play Song from Playlist|
|`POST`|/playlist|Add a song to Playlist|

### JSON Body

`GET` /playlist

```json
{
    "title": "Runtuh",
    "artist": "Fiersa Besari, Feby Putri",
    "url": "https://spotify.com/track/123456",
}
```
