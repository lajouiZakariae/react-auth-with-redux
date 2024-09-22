export class AuthTokenStorage {
    static setToken(token: string) {
        localStorage.setItem('token', token)
    }

    static getToken() {
        return localStorage.getItem('token')
    }

    static removeToken() {
        localStorage.removeItem('token')
    }

    static hasToken() {
        return !!localStorage.getItem('token')
    }
}
