import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '../features/auth/api/auth-service'
import { useClearUserData } from '../features/auth/hooks/use-clear-user-data'
import { useNavigate } from 'react-router-dom'
import { AuthTokenStorage } from '@/helpers/auth-token-storage'

export const App = () => {
    const clearUserData = useClearUserData()

    const logoutMutation = useMutation({
        mutationFn: AuthApi.logout,
        onSuccess: () => {
            clearUserData()
            AuthTokenStorage.removeToken()
        },
    })

    const navigate = useNavigate()

    return (
        <>
            <button
                onClick={() =>
                    logoutMutation.mutate(undefined, {
                        onSuccess: () => {
                            navigate('/login')
                        },
                    })
                }
            >
                Log out
            </button>
            <h1>Hello world</h1>
        </>
    )
}
