import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { User } from '../dto/user'

type UesrAsObject = 

export const useUserFromStore = () => {
    const user = useSelector<RootState>(state => state.user)

    return user !== undefined ? new User() : null
}
