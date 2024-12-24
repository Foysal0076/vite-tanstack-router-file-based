import {
  Link,
  Outlet,
  createRootRouteWithContext,
  useRouter,
} from '@tanstack/react-router'
import { AuthContextType, useAuth } from '../hooks/use-auth'

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
}

type RouterContext = {
  authentication: AuthContextType
}

const Layout = () => {
  const { logout } = useAuth()
  const router = useRouter()
  const signOut = () => {
    logout()
    router.navigate({ to: '/login' })
  }
  return (
    <div>
      <ul>
        <li>
          <Link to='/' activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/profile' activeProps={activeProps}>
            Profile
          </Link>
        </li>
        <li>
          <Link
            to='/pokemon/$id'
            activeProps={activeProps}
            params={{ id: '1' }}
            search={(prev) => ({ ...prev, foo: 'bar' })}>
            Pokemon/$id
          </Link>
        </li>
        <li>
          <Link to='/pokemon' activeProps={activeProps}>
            Pokemons
          </Link>
        </li>
        <li>
          <Link
            to='/search'
            activeProps={activeProps}
            search={{
              query: 'shoes',
              categories: ['electronics', 'clothing'],
              hasDiscount: false,
            }}>
            Search
          </Link>
        </li>
        <li>
          <Link to='/login' activeProps={activeProps}>
            Login
          </Link>
        </li>
        <li>
          <Link to='/dashboard' activeProps={activeProps}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/settings' activeProps={activeProps}>
            Settings
          </Link>
        </li>
        <button onClick={signOut}>Logout</button>
      </ul>
      <Outlet />
    </div>
  )
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Layout,
})
