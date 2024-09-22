import { User } from '../dto/user'
import { apiClient } from '@/api-client'

export class AuthApi {
    static async login(credentials: {
        email: string
        password: string
    }): Promise<User> {
        const response = await apiClient.post('login', credentials)
        const data = response.data
        const user = data.data

        const userModel = new User(
            user.id,
            user.first_name,
            user.last_name,
            user.email,
            user.email_verified_at
        )

        userModel.setToken(data.meta.token)

        return userModel
    }

    static async logout(): Promise<void> {
        await apiClient.post('logout')
    }
}
