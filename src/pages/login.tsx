import { Field, Form, Formik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '@/features/auth/api/auth-service'
import { User } from '@/features/auth/dto/user'
import { useDispatch } from 'react-redux'
import { setUser } from '@/features/auth/store'
import { AuthTokenStorage } from '@/helpers/auth-token-storage'

export const Login = () => {
    const dispatch = useDispatch()

    const loginMutation = useMutation({
        mutationFn: (values: { email: string; password: string }) =>
            AuthApi.login(values),
        onSuccess: user => {
            if (user instanceof User) {
                AuthTokenStorage.setToken(user.getToken())

                dispatch(setUser(user.toObject()))
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
