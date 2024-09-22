import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from '@/store'
import { QueryClientProvider } from '@tanstack/react-query'
import { AuthenticationInitializer } from '@/features/auth/components/init-auth'
import { queryClient } from '@/query-client'
import { Auth } from '@/features/auth/components/auth'
import { Guest } from '@/features/auth/components/guest'
import { Login } from '@/pages/login'
import { App } from '@/pages/app'

const router = createBrowserRouter([
    {
        path: '/login',
        element: (
            <Guest>
                <Login />
            </Guest>
        ),
    },
    {
        path: '/',
        element: (
            <Auth>
                <App />
            </Auth>
        ),
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <AuthenticationInitializer>
                <RouterProvider router={router} />
            </AuthenticationInitializer>
        </Provider>
    </QueryClientProvider>
)
