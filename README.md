# Playlist - API

This repository serves simple Playlist API using `Express.js`

## Get Started

> Instalation

```poweshell
npm install
```

> Run

```poweshell
npm run start
```

## API Endpoint

|Method|Path|Description|
|---|---|---|
|`GET`|/playlist| Get a song from Playlist|
|`POST`|/playlist|Add a song to Playlist|
|`GET`|/playlist/mostplayed| Get Most Played song from Playlist|
|`GET`|/playlist/play/0|Play Song from Playlist|

### JSON Body

`POST` /playlist

```json
{
    "title": "Runtuh",
    "artist": "Fiersa Besari, Feby Putri",
    "url": "https://spotify.com/track/123456",
}
```
