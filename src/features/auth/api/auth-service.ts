import { apiClient } from '@/api-client'

export class AuthApi {
    static async login(credentials: { email: string; password: string }) {
        const { data } = await apiClient.post('login', credentials)

        const user = data.data

        const userToken = data.meta.token

        user.token = userToken

        return user
    }

    static async logout(): Promise<void> {
        await apiClient.post('logout')
    }
}
