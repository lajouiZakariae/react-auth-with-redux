import { useDispatch } from 'react-redux'
import { setUser } from '../store'

export const useSetUserData = () => {
    const dispatch = useDispatch()

    return (data: object | undefined) => {
        const updatedData = data ?? null

        dispatch(setUser(updatedData))

        return updatedData
    }
}
