import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collabrative",
    "streaming",
    "user-read-follow",
    "user-top-read",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-currently-played",
    "user-follow-read"
].join(",")

const queryParamString = new URLSearchParams(scopes)

const LOGIN_URL =`https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const SpotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
})
export default SpotifyApi
export { LOGIN_URL }