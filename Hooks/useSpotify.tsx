import { useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import SpotifyApi from "../utils/SpotifyAPI"

const useSpotify = () => {
    const { data } = useSession()

    useEffect(() => {
        if (data) {
            if (data.error === "RefreshAccessTokenError") {
                signIn()
            }
        }
    }, [data])
    return SpotifyApi
}

export default useSpotify