export class UserDto {
    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public email: string,
        public email_verified_at: string | null,
        public token: string | null = null
    ) {}

    static fromObject(data: UserObject) {
        const user = new UserDto(
            data.id,
            data.first_name,
            data.last_name,
            data.email,
            data.email_verified_at,
            data.token
        )

        return user
    }
}

export type UserObject = {
    [K in keyof UserDto]: UserDto[K]
}
