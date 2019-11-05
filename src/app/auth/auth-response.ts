export interface AuthResponse {

    user: {
        id: number,
        name: string,
        access_token: string,
        expires_in: number
    }

}
