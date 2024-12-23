import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

const Layout = () => (
  <div>
    <ul>
      <li>
        <Link
          to='/'
          activeProps={{
            style: {
              fontWeight: 'bold',
            },
          }}>
          Home
        </Link>
      </li>
      <li>
        <Link
          to='/profile'
          activeProps={{
            style: {
              fontWeight: 'bold',
            },
          }}>
          Profile
        </Link>
      </li>
    </ul>
    <Outlet />
  </div>
)

export const Route = createRootRoute({
  component: Layout,
})
