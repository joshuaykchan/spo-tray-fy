const fetch = require('electron-fetch')
const auth = require('/auth')
const querystring = require('querystring')

function getNowPlaying(access_token) {
    fetch('https://api.spotify.com/v1/me/player', {
        method: 'GET',
        header: {
            'Authorization': 'Bearer ' + access_token
        }
    })
    .then(res => res.json())
    .then(json => data = {
        repeat: json.repeat_state,
        shuffle: json.shuffle_state,
        is_playing: json.is_playing,
        album: json.item.album.name,
        album_art: json.item.album.images,
        artists: json.item.artists,
        duration: json.item.duration_ms,
        track: json.item.name,
        progress: json.progress_ms
    })
    return data
}

function putPause(access_token) {
    fetch('https://api.spotify.com/v1/me/player/pause', {
        method: 'PUT',
        header: {
            'Authorization': 'Bearer ' + access_token
        }
    })
    .then(res => {
        if (res.status !== 204) {
            putPause(access_token)
        }
    })
}

function putPlay(access_token) {
    fetch('https://api.spotify.com/v1/me/player/play', {
        method: 'PUT',
        header: {
            'Authorization': 'Bearer ' + access_token
        }
    })
    .then(res => {
        if (res.status !== 204) {
            putPlay(access_token)
        }
    })
}

function putRepeat(state, access_token) {
    fetch('https://api.spotify.com/v1/me/player/repeat', {
        method: 'PUT',
        header: {
            'Authorization': 'Bearer ' + access_token
        },
        body: querystring.stringify({
            state: state
        })
    })
    .then(res => {
        if (res.status !== 204) {
            putRepeat(access_token)
        }
    })
}

function putShuffle(state, access_token) {
    fetch('https://api.spotify.com/v1/me/player/shuffle', {
        method: 'PUT',
        header: {
            'Authorization': 'Bearer ' + access_token
        },
        body: querystring.stringify({
            state: state
        })
    })
    .then(res => {
        if (res.status !== 204) {
            putShuffle(access_token)
        }
    })
}

function putPrevious(access_token) {
    fetch('https://api.spotify.com/v1/me/player/previous', {
        method: 'POST',
        header: {
            'Authorization': 'Bearer ' + access_token
        }
    })
    .then(res => {
        if (res.status !== 204) {
            putPrevious(access_token)
        }
    })
}

function putNext(access_token) {
    fetch('https://api.spotify.com/v1/me/player/next', {
        method: 'POST',
        header: {
            'Authorization': 'Bearer ' + access_token
        }
    })
    .then(res => {
        if (res.status !== 204) {
            putNext(access_token)
        }
    })
}

function putCurStart(access_token) {
    fetch('https://api.spotify.com/v1/me/player/seek', {
        method: 'PUT',
        header: {
            'Authorization': 'Bearer ' + access_token
        },
        body: querystring.stringify({
            position_ms: 0
        })
    })
    .then(res => {
        if (res.status !== 204) {
            putCurStart(access_token)
        }
    })
}

