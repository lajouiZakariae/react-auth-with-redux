import { useDispatch } from 'react-redux'
import { setUser } from '../store'
import { User } from '../dto/user'

export const useSetUserData = () => {
    const dispatch = useDispatch()

    return (data: User | undefined) => {
        /**
         * Destructure the User object to ensure only plain data properties are included
         * in the action payload, making it serializable.
         */
        dispatch(setUser(data ? { ...data } : null))

        return data
    }
}
