import SpotifyProvider from 'next-auth/providers/spotify'
import NextAuth from 'next-auth/next'
import spotifyApi, { LOGIN_URL } from '../../../utils/SpotifyAPI'

async function refreshAccessToken(token) {
    try {
        spotifyApi.refreshAccessToken(token.accessToken)
        spotifyApi.setRefreshToken(token.refreshToken)
        const { body: refreshedToken } = await spotifyApi.refreshAccessToken()

        return {
            ...token,
            accessToken: refreshAccessToken.accessToken,
            accessTokenExpires: Date.now + refreshedToken.expires_in*1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
        }

    } catch (error) {
        console.log(error)
        return {
            ...token,
            error: `RefreshTokenError`
        }
    }
}

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            authorization: LOGIN_URL,
        })
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: `/Login` 
    },
    callbacks: {
        async jwt({token, account, user}) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000
                }
            }
            if (Date.now() < token.access_token) {
                return token
            }
            return await refreshAccessToken(token)  
        },
        async session({session, token}) {
            session.user.accessToken = token.accessToken
            session.user.refreshToken = token.refreshToken
            session.user.username = token.user
            return session
        }
    }
})