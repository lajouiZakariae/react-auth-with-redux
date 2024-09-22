import { ClassType } from 'react'

export class User {
    private token: string | null = null

    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public email: string,
        public email_verified_at: string | null
    ) {}

    setToken(token: string) {
        this.token = token
    }

    getToken() {
        return this.token as string
    }

    static fromObject(data: any) {
        return new User(
            data.id,
            data.first_name,
            data.last_name,
            data.email,
            data.email_verified_at
        )
    }

    toObject() {
        return {
            id: this.id,
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            email_verified_at: this.email_verified_at,
        }
    }
}

export type UserType = keyof typeof User
