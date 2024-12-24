import { createFileRoute, Link, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }) => {
    const { isAuthenticated } = context.authentication
    if (!isAuthenticated()) {
      throw redirect({ to: '/login' })
    }
  },
  component: RouteComponent,
  notFoundComponent: () => <div>No Authenticated Page Found</div>,
})

function RouteComponent() {
  return (
    <div>
      <Link to='/dashboard'>Dashboard</Link>{' '}
      <Link to='/settings'>Settings</Link>
      <Link to='/payment'>Payment</Link>
      <hr />
      <Outlet />
    </div>
  )
}
