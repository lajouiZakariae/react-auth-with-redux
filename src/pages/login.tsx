import { Field, Form, Formik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '@/features/auth/api/auth-service'
import { User } from '@/features/auth/dto/user'
import { AuthTokenStorage } from '@/helpers/auth-token-storage'
import { useSetUserData } from '@/features/auth/hooks/use-set-user-data'

export const Login = () => {
    const setUserData = useSetUserData()

    const loginMutation = useMutation({
        mutationFn: (values: { email: string; password: string }) =>
            AuthApi.login(values),
        onSuccess: user => {
            if (user instanceof User) {
                if (user.token) {
                    AuthTokenStorage.setToken(user.token)
                }

                setUserData(user)
            }
        },
    })

    return (
        <Formik
            initialValues={{
                email: 'test@example.com',
                password: 'password',
            }}
            onSubmit={async values => {
                loginMutation.mutate(values)
            }}
        >
            <Form>
                <Field type="text" name="email" />
                <Field type="text" name="password" />
                <button type="submit" className="btn btn-primary">
                    Log in
                </button>
            </Form>
        </Formik>
    )
}
