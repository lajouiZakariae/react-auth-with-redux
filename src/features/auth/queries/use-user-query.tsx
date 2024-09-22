import { useQuery } from '@tanstack/react-query'
import { User } from '../dto/user'

export const useUserQuery = () =>
    useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            // return Promise.resolve(null)
            return Promise.resolve(
                new User(
                    1,
                    'John',
                    'Doe',
                    'john@doe.gom',
                    '2021-09-01T00:00:00Z'
                )
            )
            // const { data } = await apiClient.get('user')
            // return User.fromObject(data.data)
        },
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

// export const useUserQuery = () => {
//     const [data, setData] = useState<User | null>(null)
//     const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
//     const [error, setError] = useState<Error | null>(null)

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await apiClient.get('user')
//                 setData(User.fromObject(response.data.data))
//                 setStatus('success')
//             } catch (error) {
//                 setStatus('error')
//                 setError(error as Error)
//             }
//         }

//         fetchData()
//     }, [])

//     return {
//         data,
//         isLoading: status === 'idle',
//         isError: status === 'error',
//         isSuccess: status === 'success',
//         error,
//     }
// }
