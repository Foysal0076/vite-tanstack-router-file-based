import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useAuth } from '../hooks/use-auth'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
  beforeLoad: async () => {
    console.log('beforeLoad')
  },
})

function RouteComponent() {
  const { login } = useAuth()
  const router = useRouter()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget) return

    const data = new FormData(e.target as HTMLFormElement)
    const email = data.get('email')
    const password = data.get('password')
    login(email as string, password as string)
    router.navigate({ to: '/profile' })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input id='email' name='email' type='email' />
        </label>
        <label>
          Password
          <input id='password' name='password' type='password' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
