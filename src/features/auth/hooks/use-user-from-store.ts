import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { UserDto, UserObject } from '../dto/user-dto'

export const useUserFromStore = () => {
    const user = useSelector<RootState>(state => state.user)

    return user !== undefined ? UserDto.fromObject(user as UserObject) : null
}
